import React from "react";
import Task from "./Task";

function TaskList({ tasks, onRemove }) {
  const taskElements = tasks.map((task) => (
    <Task
      key={task.text} // unique identifiers
      text={task.text}
      category={task.category}
      onRemove={onRemove}
    />
  ));

  return <div className="tasks">{taskElements}</div>;
}

export default TaskList;
