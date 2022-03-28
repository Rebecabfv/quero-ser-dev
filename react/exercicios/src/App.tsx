import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Gallery } from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
