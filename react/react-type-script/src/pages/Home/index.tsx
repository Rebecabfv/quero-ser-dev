import { useState } from "react";
import logo from "./logo.svg";
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { TaskList } from "../../components/TaskList";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      {/* <a href="/about">Página about</a> */}
      <Link to="/about">Página about</Link>
      <Button id="botao-1" Icone={FaThumbsUp} texto="Inscreva-se agora" />
      <Button Icone={FaHeart} />
      <h1>{"Hey".toUpperCase()}</h1>
      <h1>Hey</h1>
      <TaskList />
      <Link to="/oparation">Operation Sum</Link>
    </div>
  );
}
