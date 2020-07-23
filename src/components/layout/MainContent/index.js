import React from "react";
import "./styles.css";

const index = () => {
  return (
    <main>
      <div className="content">
        <section>
          <div className="section-header">
            <a href="/#" className="title">
              Tocado recentemente
            </a>

            <a href="/#">VER TUDO</a>
          </div>
          <div className="section-cards">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default index;
