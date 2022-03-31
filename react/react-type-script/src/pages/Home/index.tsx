import { useState } from "react";
import logo from "./logo.svg";
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { TaskList } from "../../components/TaskList";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <button></button>
      {/* <a href="/about">Página about</a> */}
      <Link to="/about">Página about</Link>
      <hr />
      <Link to="/oparation">Operation Sum</Link>
      <hr />
      <Link to="/animal-facts">Fatos sobre animais</Link>
      <Button id="botao-1" Icone={FaThumbsUp}>
        Inscreva-se agora
      </Button>
      {/* <Button id="botao-1" Icone={FaThumbsUp} texto="Inscreva-se agora" /> */}
      <Button Icone={FaHeart} />
      <Button>
        Teste
        <FaThumbsUp />
      </Button>
      <Button>
        <img src="https://github.com/rebecabfv.png" alt="" height={60} />
        <h1>Rebeca</h1>
      </Button>
      <h1>{"Hey".toUpperCase()}</h1>
      <h1>Hey</h1>
      <TaskList />
    </div>
  );
}
