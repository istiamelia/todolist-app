import React from "react";

function Icons({
  size,
  color,
  viewBox,
  path,
  path2,
}: {
  size: string;
  color: string;
  viewBox: string;
  path: string;
  path2: string | undefined;
}) {
  return (
    <>
      <svg
        className={color}
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
      >
        <path d={path} />
        <path d={path2} />
      </svg>
    </>
  );
}

export default Icons;
