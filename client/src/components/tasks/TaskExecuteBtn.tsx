import React from "react";

interface Props {
  d: string;
  text: string;
  viewBox: string;
  color: string;
  type: "submit" | "reset" | "button" | undefined;
}

function Button({ d, text, viewBox, type, color }: Props) {
  return (
    <button
      type={type}
      className={`mx-1 text-xs text-${color} drop-shadow-sm px-3 py-1 w-auto ring-1 ring-purple2 focus:ring focus:ring-purple2 bg-transparent active:bg-${color} hover:bg-purple2 active:text-white hover:text-white rounded-full flex flex-row place-items-center`}
    >
      <svg
        className="font-semibold fill-current active:text-white hover:text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox={viewBox}
      >
        <path fill="currentColor" d={d} />
      </svg>
      {text}
    </button>
  );
}

function TaskExecuteBtn() {
  return (
    <>
      <div id="task-execute" className="flex flex-row justify-end">
        {/* Button Element to toggle the Popup Add Task Form */}
        <Button
          d={"M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"}
          text={"New Task"}
          viewBox={"0 0 24 24"}
          type="button"
          color="purple2"
        />

        <form className="mx-1" action="" method="post">
          <Button
            d={
              "m3.594 12l1.687 1.72l10 10l.72.686l.72-.687l10-10L28.405 12zm4.844 2h15.124L16 21.563L8.437 14z"
            }
            text={"Sort by"}
            viewBox={"0 0 32 32"}
            type="submit"
            color="purple2"
          />
        </form>

        <form className="mx-1" action="/todos?_method=DELETE" method="post">
          <Button
            d={
              "M7.616 20q-.672 0-1.144-.472T6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.23 0 .423-.192t.192-.424zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"
            }
            text={"Delete All"}
            viewBox={"0 0 24 24"}
            type="submit"
            color="delete2"
          />
        </form>
      </div>
    </>
  );
}

export default TaskExecuteBtn;
