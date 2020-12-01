import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useStore } from "./store";

import LoadingView from "./components/ui/LoadingView";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./views/Login";
import Home from "./views/Home";
import Search from "./views/Search";
import YourLibrary from "./views/YourLibrary";

function Routes() {
  const { token, isFetching } = useStore();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Sidebar />
      <Footer />

      <main className="app-main">
        <Switch>
          {token ? (
            <>
              {isFetching && <LoadingView />}
              <Route exact strict path="/home" component={Home} />
              <Route exact strict path="/search" component={Search} />
              <Route exact strict path="/your-library" component={YourLibrary} />
              <Redirect to="/home" />
            </>
          ) : (
            <>
              <Route exact strict path="/login" component={Login} />
              <Redirect to="/login" />
            </>
          )}
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default Routes;
