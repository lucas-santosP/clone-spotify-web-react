import React, { useState } from "react";
import "./styles.scss";

const ListOfCategories = () => {
  const categories = ["Playlists", "Podcasts", "Artistas", "Álbuns"];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <ul className="list-of-categories">
      {categories.map((category) => (
        <li
          key={category}
          className={currentCategory === category ? "item selected" : "item"}
          onClick={() => setCurrentCategory(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default ListOfCategories;
