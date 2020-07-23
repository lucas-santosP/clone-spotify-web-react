import React from "react";

import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/layout/MainContent";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
