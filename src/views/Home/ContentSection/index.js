import React from "react";
import "./styles.scss";

import ContentCard from "../ContentCard";
import SectionHeader from "../../../components/ui/SectionHeader";

const ContentSection = ({ title = "", arrayItems = [], linkTo = "#" }) => {
  return (
    <section className="section-container">
      <SectionHeader type="link" title={title} linkTo={linkTo} />

      <div className="section-cards">
        {arrayItems.map((element, index) => (
          <ContentCard key={index + element} />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
