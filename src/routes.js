import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useStore } from "./store";

import { Header, Sidebar, Footer } from "@/components/layout";
import { LoadingView } from "@/components/ui";
import Login from "@/views/Login";
import Home from "@/views/Home";
import Search from "@/views/Search";
import YourLibrary from "@/views/YourLibrary";

function Routes() {
  const { token, onLoading } = useStore();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Sidebar />
      <Footer />

      <main className="app-main">
        {onLoading ? (
          <LoadingView />
        ) : (
          <>
            {token ? (
              <Switch>
                <Route exact strict path="/search" component={Search} />
                <Route exact strict path="/your-library" component={YourLibrary} />
                <Route exact strict path="/home" component={Home} />
                <Redirect to="/home" />
              </Switch>
            ) : (
              <Switch>
                <Route path="/login" component={Login} />
                <Redirect to="/login" />
              </Switch>
            )}
          </>
        )}
      </main>
    </BrowserRouter>
  );
}

export default Routes;
