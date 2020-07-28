import React from "react";

import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
