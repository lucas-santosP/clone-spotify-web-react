import React from "react";
import "./styles.scss";

import getRandomColor from "../../utils/getRandomColor";
import SectionHeader from "../../components/ui/SectionHeader";
import Slider from "./Slider";

const Search = ({ tags, tagsInChart }) => {
  return (
    <div className="search-view-container">
      <section className="section">
        <SectionHeader title="Seus gêneros favoritos" />
        <Slider slides={tagsInChart} />
      </section>

      <section className="section">
        <SectionHeader title="Navegar por todas as seções" />
        <ul className="genres-grid">
          {tags.map((tag) => (
            <li key={tag.name + tag.reach}>
              <div
                className="bg-grid"
                style={{ backgroundColor: getRandomColor() }}
              ></div>
              <span className="text-grid">{tag.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Search;
