import path from "path";
import React, { useState } from "react";
import Icons from "../utils/Icons";
import svgPaths from "../../assets/svgPaths.json";

const menuName = ["My Tasks", "Team Members", "Calendar", "Messages"];

function Sidebar({
  onSidebarChange,
  collapse,
}: {
  collapse: boolean;
  onSidebarChange: (sidebar: boolean) => void;
}) {
  let [useCollapse, setCollapse] = useState(false);
  const menuIcons = svgPaths.menuIcon.map((icon, index) => (
    <a
      key={index}
      href=""
      className="flex flex-row justify-start px-3 place-items-center hover:bg-faded-gray active:bg-faded-gray py-3 rounded-lg"
    >
      <Icons
        color={"fill-gray-icon"}
        size="1.5em"
        path={icon}
        path2={undefined}
        viewBox={"0 0 22 22"}
      />
      <p className="ml-3 text-gray-text text-sm">{menuName[index]}</p>
    </a>
  ));

  return (
    <>
      <section
        id="sidebar"
        className={`bg-white col-start-1 col-end-2 row-start-1 row-end-3 border-r-[0.5px] border-gray-200 pl-2 py-1}`}
      >
        <div className={`${collapse ? "hidden" : "visible"}`}>
          <div
            id="profile"
            className="flex flex-row justify-start px-5 mb-10 place-items-center h-[60px]"
          >
            <img
              className="h-[50px] w-[50px] object-cover rounded-full list-image-profile"
              src="https://images.unsplash.com/photo-1590895340509-793cb98788c9?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            ></img>
            <a className="m-auto text-gray-700 font-semibold text-m" href="">
              Rifan Adriansyah
            </a>
            <div
              className="absolute group left-72 "
              onClick={() => {
                setCollapse(true);
                onSidebarChange(true);
              }}
            >
              <i className="fa fa-angles-left bg-white border-[1.5px] hover:bg-gray-200 rounded-full w-8 h-8 flex justify-center items-center"></i>
              <div className="absolute left-0 top-10 hidden group-hover:block bg-gray-100 p-1 rounded shadow-md text-[10px]">
                Collapse
              </div>
            </div>
          </div>
          {/* Navigation menu */}
          <div
            className="flex flex-col gap-3 h-[250px] justify-between py-3 px-3"
            id="navigation"
          >
            <div className="">{menuIcons}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
