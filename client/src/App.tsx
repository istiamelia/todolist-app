import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/tasks/Main";
import "./App.css";

function App() {
  return (
    <div className="App h-[100vh] grid grid-cols-[250px,1fr] grid-rows-[60px,1fr] font-sans">
      <Main />
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
