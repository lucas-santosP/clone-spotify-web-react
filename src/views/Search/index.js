import React from "react";
import "./styles.scss";

import { useStore } from "../../store";
import SectionHeader from "../../components/ui/SectionHeader";
import Slider from "./Slider";
import GenresGrid from "./GenresGrid";

const Search = () => {
  const { tags, topTags } = useStore();

  return (
    <div className="search-view-container">
      <section className="section">
        <SectionHeader title="Your top genres" />
        <Slider slides={topTags} />
      </section>

      <section className="section">
        <SectionHeader title="Browse all" />
        <GenresGrid genres={tags} />
      </section>
    </div>
  );
};

export default Search;
