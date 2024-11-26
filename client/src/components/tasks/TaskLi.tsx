import React from "react";
import Icons from "../utils/Icons";
import svgPaths from "../../assets/svgPaths.json";

interface Props {
  task_name: string;
  task_status: string;
  task_priority: string;
  due_date: Date;
  due_color: string;
  priority_color: string;
  status_color: string;
}
function TaskLi(props: Props) {
  const dueDate = new Date(props.due_date);
  const formattedDate = dueDate.toLocaleDateString("en-US");

  return (
    <>
      <li className="hover:shadow-lg cursor-pointer">
        <div className="bg-white my-2 rounded-md px-3 py-3 drop-shadow-sm">
          <div className="section1 flex flex-row">
            <p
              className={`task-priority text-xxxs w-auto h-auto focus:ring mx-1 rounded-sm px-1 ${props.priority_color}`}
            >
              {props.task_priority}
            </p>
            <p
              className={`task-status text-xxxs w-auto h-auto focus:ring mx-1 rounded-sm px-1 ${props.status_color}`}
            >
              {props.task_status}
            </p>
          </div>
          <div className="section2 flex flex-row justify-between">
            <label className="text-xxs text-gray-text flex flex-row mx-1 my-3">
              {props.task_name}
            </label>
            <button className="task-actions">
              <Icons
                color={
                  "border border-gray-300 rounded-md w-auto h-auto hover:bg-gray-100 active:bg-gray-100"
                }
                viewBox={"0 0 256 256"}
                size="1em"
                path={svgPaths.taskIcons.task_actions}
                path2=""
              />
            </button>
          </div>
          <div className="section3 flex flex-row justify-between">
            <span className="flex flex-row place-items-center">
              <Icons
                color={`fill-${props.due_color}`}
                viewBox={"0 0 22 22"}
                size="1em"
                path={svgPaths.taskIcons.date}
                path2=""
              />
              <span className={`text-xxxs mx-2 text-${props.due_color}`}>
                {formattedDate}
              </span>
            </span>
          </div>
        </div>
      </li>
    </>
  );
}

export default TaskLi;
