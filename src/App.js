import React from "react";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
