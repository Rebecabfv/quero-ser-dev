import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ImageGallerry } from "./components/ImageGallerry";
import { ChatBaloon } from "./components/ChatBaloon";

function App() {
  return (
    <div className="App">
      <ChatBaloon type="sender" text="Rebeca teste" />
      <ChatBaloon type="receiver" />
      <ChatBaloon
        type="receiver"
        imageUrl="https://www.google.com/search?q=imagem&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjfhffYzN_2AhWxmOAKHQJyCDwQ_AUoAXoECAIQAw&biw=890&bih=1041&dpr=2#imgrc=bDSxJgF0Icr8rM"
      />
      {/* <ImageGallerry /> */}
    </div>
  );
}

export default App;
