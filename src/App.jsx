import React from "react";

const App = () => {
  const onClickButton = () => alert();
  //   styleの設定は、プロパティの名前をcssと同じ記法ではなくキャメルケースで書くことに注意。
  // また、プロパティの値は文字列として記載すること。
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
