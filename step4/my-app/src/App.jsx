import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    // alert();
    setNum((prev) => prev + 1);
  };

  useEffect(() => {
    alert();
  }, [num]);
  
  return (
    <>
      <h1 style= {{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
