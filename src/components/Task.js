import React from "react";

function Task({ text, category, onRemove }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onRemove(text)}>
        X
      </button>
    </div>
  );
}

export default Task;
