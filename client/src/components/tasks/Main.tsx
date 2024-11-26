import React from "react";
import { useState, useEffect } from "react";
import TaskCategoryBtn from "./TaskCategoryBtn";
import TaskExecuteBtn from "./TaskExecuteBtn";
import TaskBoard from "./TaskBoard";
import TaskLi from "./TaskLi";

interface Todo {
  tasks: {
    task_id: string;
    task_name: string;
    task_description: string;
    task_asignee: string;
    task_status: string;
    task_priority: string;
    start_date: Date;
    due_date: Date;
    deleted_date: Date;
    created_date: Date;
    updated_date: Date;
    project_id: number;
    project_name: string;
    project_description: string;
    created_at: Date;
  }[];
  projects: {
    project_id: number;
    project_name: string;
    project_description: string;
    created_at: Date;
  }[];
}

function Main() {
  const [data, setData] = useState<Todo>();
  let [filterStatus, setFilterStatus] = useState<string[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/todos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error));
  }, []);

  const colorMap: Record<string, Record<string, string>> = {
    priority: {
      "Nice to Have": "text-yellow-700 bg-yellow-100",
      "Could Have": "text-blue-700 bg-blue-100",
      "Must Have": "text-red-700 bg-red-100",
      "Should Have": "text-green-700 bg-green-100",
      "Not Important": "text-gray-700 bg-gray-100",
    },
    status: {
      "In Progress": "text-yellow-700 bg-yellow-100",
      "In Review": "text-blue-700 bg-blue-100",
      Stuck: "text-red-700 bg-red-100",
      Completed: "text-green-700 bg-green-100",
    },
  };

  return (
    <>
      <main
        id="main"
        className="bg-white col-start-2 col-end-2 row-start-2 row-end-2 px-6 py-10"
      >
        <h1 className=" text-gray-700 font-semibold mb-5">
          Hello, Rifan Adriansyah!
        </h1>
        <TaskCategoryBtn onCheckStatus={setFilterStatus} />
        <TaskExecuteBtn />
        <hr className="my-3 -mx-6 border-t-[0.5px] border-gray-200"></hr>
        <div className="flex flex-row gap-4">
          {data?.projects.map((project) => (
            <TaskBoard project_name={project.project_name}>
              {data.tasks
                .filter(
                  (task) =>
                    task.project_id === project.project_id &&
                    filterStatus.some((status) => task.task_status === status)
                )
                .map((task) => (
                  <TaskLi
                    task_name={task.task_name}
                    task_priority={task.task_priority}
                    priority_color={colorMap.priority[task.task_priority]}
                    task_status={task.task_status}
                    status_color={colorMap.status[task.task_status]}
                    due_date={task.due_date}
                    due_color={
                      new Date(task.due_date) > new Date()
                        ? "gray-main"
                        : "red-700"
                    }
                  />
                ))}
            </TaskBoard>
          ))}
        </div>
      </main>
    </>
  );
}

export default Main;
