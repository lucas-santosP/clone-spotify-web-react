import React from "react";
import "./styles.scss";

import { useStore } from "../../store";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";

const YourLibrary = () => {
  const { categories } = useStore();

  return (
    <div className="your-library-container">
      <SectionHeader title={categories.current} />
      <div className="grid-cards">
        <Card className="grid-item" title={"Example"} subtitle={"Example"} />
        <Card className="grid-item" title={"Example"} subtitle={"Example"} />
        <Card className="grid-item" title={"Example"} subtitle={"Example"} />
      </div>
    </div>
  );
};

export default YourLibrary;
