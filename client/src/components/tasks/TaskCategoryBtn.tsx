import React from "react";

function TaskCategoryBtn() {
  return (
    <>
      <div id="task-category" className="mb-2">
        {/* Buttons for filter tasks based on status */}
        <button
          id="allTaskBtn"
          className="mx-1 text-xs text-purple2 drop-shadow-sm px-3 py-1 w-auto focus:ring focus:ring-violet-300  bg-faded-gray active:bg-purple3 hover:bg-purple3 rounded-full"
        >
          Tasks
        </button>
        <button
          id="UpcomingTaskBtn"
          className="mx-1 text-xs text-purple2 drop-shadow-sm px-3 py-1 w-auto focus:ring focus:ring-violet-300  bg-faded-gray active:bg-purple3 hover:bg-purple3 rounded-full"
        >
          Upcoming
        </button>
        <button
          id="completedBtn"
          className="mx-1 text-xs text-purple2 drop-shadow-sm px-3 py-1 w-auto focus:ring focus:ring-violet-300  bg-faded-gray active:bg-purple3 hover:bg-purple3 rounded-full"
        >
          Completed
        </button>
      </div>
    </>
  );
}

export default TaskCategoryBtn;
