import { Link } from "react-router-dom";
import { ChatBaloon } from "../../components/ChatBaloon";
import "./styles.css";

export function Chat() {
  return (
    <div>
      <ChatBaloon type="receiver" />
      <ChatBaloon
        type="receiver"
        imageUrl="https://www.google.com/search?q=imagem&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjfhffYzN_2AhWxmOAKHQJyCDwQ_AUoAXoECAIQAw&biw=890&bih=1041&dpr=2#imgrc=bDSxJgF0Icr8rM"
      />
      <ChatBaloon type="sender" text="Rebeca teste" />
      <Link to="/">Voltar para o home</Link>
    </div>
  );
}
