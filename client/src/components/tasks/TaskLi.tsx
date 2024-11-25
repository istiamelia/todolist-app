import React from "react";
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
      <li>
        <div className="section1 bg-white my-2 rounded-md px-3 py-3 drop-shadow-sm">
          <div className="flex flex-row">
            <p
              className={`task-priority text-xxxs w-auto h-auto focus:ring mx-1 rounded-md px-1 text-${props.priority_color}-700 bg-${props.priority_color}-100`}
            >
              {props.task_priority}
            </p>
            <p
              className={`task-status text-xxxs w-auto h-auto focus:ring mx-1 rounded-md px-1 text-${props.status_color}-700 bg-${props.status_color}-100`}
            >
              {props.task_status}
            </p>
          </div>
          <div className="section2 flex flex-row justify-between">
            <label className="text-xxs text-gray-text flex flex-row mx-1 my-3">
              {props.task_name}
            </label>
            <button className="task-expand">
              <svg
                className="border border-gray-300 rounded-md w-auto h-auto hover:bg-gray-100 active:bg-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"
                />
              </svg>
            </button>
          </div>
          <div className="section3 flex flex-row justify-between">
            <span className="flex flex-row place-items-center">
              <svg
                className="
                                    <% if ( new Date(task.due_date) > new Date() ){%>
                                        stroke-gray-main
                                    <% } else {%>
                                        stroke-red-700
                                    <% }%>
                                    "
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke=""
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.05"
                >
                  <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12-4v4M8 3v4m-4 4h16" />
                  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
                </g>
              </svg>
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
