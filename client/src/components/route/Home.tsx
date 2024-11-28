import React, { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Main from "../tasks/Main";
import "../../../src/App.css";

function Home() {
  let [sidebar, setSidebar] = useState(false);

  return (
    <div
      className={`App h-[100vh] grid ${
        sidebar === true ? "grid-cols-[20px,1fr]" : "grid-cols-[300px,1fr]"
      } grid-rows-[60px,1fr] font-sans`}
    >
      <Main />
      <Header onSidebarChange={() => setSidebar(!sidebar)} collapse={sidebar} />
      <Sidebar
        onSidebarChange={() => setSidebar(!sidebar)}
        collapse={sidebar}
      />
    </div>
  );
}

export default Home;
