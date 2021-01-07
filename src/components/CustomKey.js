import React from "react";
import "./CustomKey.css";

export const CustomKey = (props) => {
  return (
    <button
      className={props.styleName}
      onClick={() => props.handleButton(props.value)}
    >
      {props.value}
    </button>
  );
};
