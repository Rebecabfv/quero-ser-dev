import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskList } from "./components/TaskList";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button />
      <h1>{"Hey".toUpperCase()}</h1>
      <h1>Hey</h1>
      <TaskList />
    </div>
  );
}

export default App;
