import React, { ReactNode } from "react";

function TaskBoard({
  project_name,
  children,
}: {
  project_name: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="bg-gray-container py-3 px-2 rounded-md w-60 flex flex-col overflow-hidden h-[1%]">
        <p className="text-xs text-gray-main">{project_name}</p>
        <ul>{children}</ul>
      </div>
    </>
  );
}

export default TaskBoard;
