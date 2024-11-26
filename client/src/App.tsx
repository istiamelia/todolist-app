import React, { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/tasks/Main";
import "./App.css";

function App() {
  let [sidebar, setSidebar] = useState(false);
  console.log(sidebar);
  return (
    <div
      className={`App h-[100vh] grid ${
        sidebar === true ? "grid-cols-[0px,1fr]" : "grid-cols-[300px,1fr]"
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

export default App;
