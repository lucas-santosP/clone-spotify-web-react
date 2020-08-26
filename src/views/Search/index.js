import React from "react";
import "./styles.scss";

import SectionHeader from "../../components/ui/SectionHeader";
import Slider from "./Slider";
import GenresGrid from "./GenresGrid";

const Search = ({ tags, tagsInChart }) => {
  return (
    <div className="search-view-container">
      <section className="section">
        <SectionHeader title="Seus gêneros favoritos" />
        <Slider slides={tagsInChart} />
      </section>

      <section className="section">
        <SectionHeader title="Navegar por todas as seções" />
        <GenresGrid genres={tags} />
      </section>
    </div>
  );
};

export default Search;
