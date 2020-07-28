import React from "react";
import "./styles.css";

import MainHeader from "./MainHeader";

const index = () => {
  return (
    <main className="main-container">
      <MainHeader />

      <div className="content">
        <section>
          <div className="section-header">
            <a href="/#" className="title">
              Tocado recentemente
            </a>

            <a href="/#">VER TUDO</a>
          </div>
          <div className="section-cards">
            {[
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              1,
              0,
              1,
              1,
              1,
              2,
              1,
              3,
              5,
              1,
              5,
              6,
              8,
              6,
              7,
              4,
              4,
              2,
              4,
              5,
              1,
              8,
              1,
              5,
              1,
            ].map((element, index) => (
              <div key={index} className="card"></div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default index;
