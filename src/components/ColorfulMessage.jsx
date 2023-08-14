import React from "react";

export const ColorfulMesagge = (props) => {
  const { color, children } = props;
  const messageStyle = {
    color,
    fontSize: "18px",
  };
  return <p style={messageStyle}>{children}</p>;
};

// export default ColorfulMesagge;
