import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import Icons from "../utils/Icons";
import svgPaths from "../../assets/svgPaths.json";

interface Props {
  d: string;
  text: string;
  viewBox: string;
  color: string;
  type: "submit" | "reset" | "button" | undefined;
  onClick: () => void;
}

function Button({ d, text, viewBox, type, color, onClick }: Props) {
  return (
    <button
      type={type}
      className={`mx-1 text-xs bg-${color} text-white drop-shadow-sm px-3 py-1 w-auto ring-1 ring-${color} focus:ring focus:ring-${color} active:bg-${color}-200 hover:bg-${color}-500 active:text-white hover:text-white rounded-full flex flex-row place-items-center`}
      onClick={onClick}
    >
      <Icons
        color={"font-semibold fill-current active:text-white hover:text-white"}
        viewBox={viewBox}
        size="1em"
        path={d}
        path2=""
      />
      {text}
    </button>
  );
}

function TaskExecuteBtn() {
  const [newTaskModal, setNewTaskModal] = useState(false);
  return (
    <>
      <div id="task-execute" className="flex flex-row justify-end">
        {/* Button Element to toggle the Popup Add Task Form */}
        <Button
          d={svgPaths.taskIcons.new_task}
          text={"New Task"}
          viewBox={"0 0 24 24"}
          type="submit"
          color="purple2"
          onClick={() => setNewTaskModal(true)}
        />
        <form className="mx-1" action="" method="post">
          <Button
            d={svgPaths.taskIcons.sort_by}
            text={"Sort by"}
            viewBox={"0 0 32 32"}
            type="submit"
            color="purple2"
            onClick={() => console.log("ok")}
          />
        </form>

        <form className="mx-1" action="/todos?_method=DELETE" method="post">
          <Button
            d={svgPaths.taskIcons.delete}
            text={"Delete All"}
            viewBox={"0 0 24 24"}
            type="submit"
            color="delete"
            onClick={() => null}
          />
        </form>
        <AddTaskModal
          visibility={
            newTaskModal === true
              ? "open opacity-[1] visible z-[999]"
              : "hidden opacity-0"
          }
          onStatusChange={setNewTaskModal}
        />
      </div>
    </>
  );
}

export default TaskExecuteBtn;
