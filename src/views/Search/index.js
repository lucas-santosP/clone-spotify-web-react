import React from "react";
import "./styles.scss";

import getRandomColor from "../../utils/getRandomColor";
import SectionHeader from "../../components/ui/SectionHeader";

const Search = ({ tags, tagsInChart }) => {
  function setBackground() {
    return {
      backgroundColor: getRandomColor(),
    };
  }

  return (
    <div className="search-view-container">
      <section className="section">
        <SectionHeader title="Seus gêneros favoritos" />

        <ul className="fav-genre-carousel">
          {tagsInChart.map((tag) => (
            <li key={tag.name + tag.reach}>
              <div className="bg-grid" style={setBackground()}></div>
              <span className="text-grid">{tag.name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <SectionHeader title="Navegar por todas as seções" />

        <ul className="genres-grid">
          {tags.map((tag) => (
            <li key={tag.name + tag.reach}>
              <div className="bg-grid" style={setBackground()}></div>
              <span className="text-grid">{tag.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Search;
