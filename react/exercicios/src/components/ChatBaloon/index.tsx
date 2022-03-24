import "./styles.css";

type ChatBaloonProps = {
  type: "sender" | "receiver";
  imageUrl?: string;
  text?: string;
};

export function ChatBaloon(props: ChatBaloonProps) {
  const { type, imageUrl, text } = props;

  return (
    <div className={type}>
      {text ? <h1>{text}</h1> : <h1>Chat</h1>}
      {imageUrl && <img src={imageUrl} width={100}></img>}
      {/* {imageUrl && (
        <div>
          <img src={imageUrl} alt="" />
        </div>
      )} */}
    </div>
  );
}
