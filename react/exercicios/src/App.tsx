import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Gallery } from "./pages/Gallery";
import { Contador } from "./pages/Contador";
import { PresentList } from "./pages/PresentList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="chat" element={<Chat />} />
        <Route path="count" element={<Contador />} />
        <Route path="list" element={<PresentList />} />
      </Routes>
    </div>
  );
}

export default App;
