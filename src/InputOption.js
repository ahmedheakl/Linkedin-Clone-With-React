import React from "react";
import "./styles/InputOption.css";

function InputOption({ Icon, title, color }) {
  return (
    <div className="inputoption">
      <Icon style={{ color: color }} />
      <p>{title}</p>
    </div>
  );
}

export default InputOption;
