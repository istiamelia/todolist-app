import React, { useState } from "react";

function Header({
  collapse,
  onSidebarChange,
}: {
  collapse: boolean;
  onSidebarChange: (sidebar: boolean) => void;
}) {
  let [useCollapse, setCollapse] = useState(false);
  return (
    <>
      <header
        id="header"
        className="h-[60px] col-start-2 col-end-3 row-start-1 row-end-2 flex flex-row justify-between px-6 py-4 place-items-center"
      >
        <div className="flex">
          <div
            className={`absolute left-2 group ${
              collapse === true ? "visible" : "hidden"
            }`}
            onClick={() => {
              setCollapse(true);
              onSidebarChange(useCollapse);
            }}
          >
            <i className="fa fa-angles-right bg-white mr-2 border-[1.5px] hover:bg-gray-200 rounded-full w-8 h-8 flex justify-center items-center"></i>
            <div className="absolute w-[85px] left-0 top-10 hidden group-hover:block bg-gray-100 p-1 rounded shadow-md text-[10px]">
              Expand Sidebar
            </div>
          </div>
          {/* Container for Search Engine */}
          <div
            id="search-container"
            className="px-3 flex flex-row justify-between rounded-full shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2"
          >
            <input
              type="text"
              className="w-[300px] h-[30px] block flex-1 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sn: leading-6"
              placeholder="Search Task or Project"
            ></input>
            <button type="submit" id="search-btn">
              <svg
                className="fill-gray-icon hover:fill-gray-main"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <path
                  fill=""
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* App Logo */}
        <div>
          <h3 className="font-body text-2xl font-semibold text-purple-800">
            Ordino
          </h3>
        </div>
      </header>
    </>
  );
}

export default Header;
