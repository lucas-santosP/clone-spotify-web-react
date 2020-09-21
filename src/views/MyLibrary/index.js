import React from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import { useStore } from "../../store";
const MyLibrary = () => {
  const { categories } = useStore();

  return (
    <div>
      <SectionHeader title={categories.current} />
    </div>
  );
};

export default MyLibrary;
