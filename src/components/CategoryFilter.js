import React from "react";

function CategoryFilter({ categories, onSelectedCategory, onHandleCategory }) {
  const buttonElements = categories.map((category) => (
    <button
      key={category}
      className={onSelectedCategory === category ? "selected" : ""}
      onClick={() => onHandleCategory(category)}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonElements}
    </div>
  );
}

export default CategoryFilter;
