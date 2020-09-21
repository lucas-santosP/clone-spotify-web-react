import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Search from "./views/Search";
import YourLibrary from "./views/YourLibrary";
import LoadingView from "./components/ui/LoadingView";

import { useStore } from "./store";

function Routes() {
  const { isFetching } = useStore();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Sidebar />
      <Footer />

      <main className="app-main">
        {isFetching ? (
          <LoadingView />
        ) : (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/my-library" component={YourLibrary} />
            <Redirect to="/home" />
          </Switch>
        )}
      </main>
    </BrowserRouter>
  );
}

export default Routes;
