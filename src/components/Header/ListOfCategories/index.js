import React from "react";
import "./styles.scss";

import { useStore } from "../../../store";

const ListOfCategories = () => {
  const { categories, setCategories } = useStore();

  function updateCurrentCategory(newCategory) {
    setCategories((categories) => {
      return {
        ...categories,
        current: newCategory,
      };
    });
  }

  return (
    <ul className="list-of-categories">
      {categories.array.map((category) => (
        <li
          key={category}
          className={categories.current === category ? "item selected" : "item"}
          onClick={() => updateCurrentCategory(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default ListOfCategories;
