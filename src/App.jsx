// 波かっこは分割代入
import React, { useState, useEffect } from "react";
import { ColorfulMesagge } from "./components/ColorfulMessage";
const App = () => {
  console.log("最初");
  // Statｓ
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // Method
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlga = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 指定した第二引数の変数の値が変化したときにだけ反応する
  useEffect(() => {
    console.log("useEffect!");
    if (num > 0) {
      if (num % 3 == 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  //   styleの設定は、プロパティの名前をcssと同じ記法ではなくキャメルケースで書くことに注意。
  // また、プロパティの値は文字列として記載すること。
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };

  // 描画内容
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMesagge color="blue">お元気ですか？</ColorfulMesagge>
      <ColorfulMesagge color="pink">元気です</ColorfulMesagge>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlga}>on/off</button>
      <p>{num}</p>
      <p>{faceShowFlag && "^_^"}</p>
    </>
  );
};

export default App;
