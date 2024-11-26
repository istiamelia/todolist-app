import React, { useState } from "react";

let checkStatuses = [];

function Select({
  name,
  check,
  onClick,
}: {
  name: string;
  check: string[];
  onClick: () => void;
}) {
  return (
    <>
      <li
        className="item m-2 flex justify-start place-items-center cursor-pointer"
        onClick={onClick}
      >
        <span className="checkbox mr-2 border-2 rounded-md w-5 h-5 flex place-items-center justify-center">
          <i
            className={`fa ${
              check.includes(name) ? "fa-check check-icon" : ""
            }`}
          ></i>
        </span>
        <span className="item-text">{name}</span>
      </li>
    </>
  );
}

function TaskCategoryBtn({
  onCheckStatus,
}: {
  onCheckStatus: (statuses: string[]) => void;
}) {
  let [listItems, setListItems] = useState("hidden");
  const [checkStatuses, setCheckStatuses] = useState<string[]>([
    "In Review",
    "In Progress",
    "Stuck",
    "Completed",
  ]);

  const handleCheck = (name: string) => {
    setCheckStatuses((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };
  onCheckStatus(checkStatuses);

  return (
    <>
      <div id="task-category" className="mb-2 text-xs text-purple2">
        {/* Buttons for filter tasks based on status */}
        <div
          className="select-btn mx-1 shadow-md px-3 py-1 w-[150px] border focus:ring focus:ring-violet-300 rounded-s flex justify-between place-items-center cursor-pointer"
          onClick={() => {
            listItems === "hidden"
              ? setListItems("block")
              : setListItems("hidden");
          }}
        >
          <span className="btn-text">
            {checkStatuses.length === 0
              ? "Select Task Status"
              : checkStatuses.length === 4
              ? "All  Selected"
              : `${checkStatuses.length} Selected`}
          </span>
          <span className="flex place-items-center justify-center arrow-dwn w-4 h-4 rounded-full bg-purple3 text-white">
            <i
              className={`fa ${
                listItems === "hidden" ? "fa-chevron-down" : "fa-chevron-up"
              }`}
            ></i>
          </span>
        </div>
        <ul
          className={`list-items absolute shadow-md w-[150px] p-2 ${listItems} z-10 bg-white mt-1 ml-1 rounded-s fle`}
        >
          <Select
            name="In Progress"
            onClick={() => handleCheck("In Progress")}
            check={checkStatuses}
          />
          <Select
            name="In Review"
            onClick={() => handleCheck("In Review")}
            check={checkStatuses}
          />
          <Select
            name="Stuck"
            onClick={() => handleCheck("Stuck")}
            check={checkStatuses}
          />
          <Select
            name="Completed"
            onClick={() => handleCheck("Completed")}
            check={checkStatuses}
          />
        </ul>
      </div>
    </>
  );
}

export default TaskCategoryBtn;
