import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

// 上記のAppをrender関数の第一引数とする
ReactDom.render(<App />, document.getElementById("root"));
