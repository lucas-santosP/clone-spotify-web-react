import React from "react";
import "./styles.scss";

const SectionHeader = ({
  type = "text",
  title = "Empty title",
  linkTo = "#",
}) => {
  let titleElement;

  if (type === "text") {
    titleElement = title;
  } else if (type === "link") {
    titleElement = (
      <a href={linkTo} className="title-link">
        {title}
      </a>
    );
  }

  return (
    <section className="section-container">
      <div className="section-header">
        <h2 className="title">{titleElement}</h2>

        {type === "link" ? (
          <a href={linkTo} className="aside-link">
            VER TUDO
          </a>
        ) : null}
      </div>
    </section>
  );
};

export default SectionHeader;
