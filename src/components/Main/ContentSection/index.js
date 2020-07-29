import React from "react";
import "./styles.scss";

import ContentCard from "../ContentCard";

const ContentSection = ({ title = "", arrayItems = [], linkTo = "#" }) => {
  return (
    <section className="section-container">
      <div className="section-header">
        <a href="/#" className="title-link">
          {title}
        </a>

        <a href={linkTo} className="aside-link">
          VER TUDO
        </a>
      </div>

      <div className="section-cards">
        {arrayItems.map((element, index) => (
          <ContentCard key={index + element} />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
