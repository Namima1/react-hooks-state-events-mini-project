import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleRemove(text) {
    const newList = tasks.filter((task) => task.text !== text);
    setTasks(newList);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredTasks = tasks.filter(task => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onSelectedCategory={selectedCategory}
        onHandleCategory={handleCategoryChange}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={filteredTasks} onRemove={handleRemove} />
    </div>
  );
}

export default App;
