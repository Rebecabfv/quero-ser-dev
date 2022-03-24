import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { TaskList } from "./components/TaskList";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button id="botao-1" Icone={FaThumbsUp} texto="Inscreva-se agora" />
      <Button Icone={FaHeart} />
      <h1>{"Hey".toUpperCase()}</h1>
      <h1>Hey</h1>
      <TaskList />
    </div>
  );
}

export default App;
