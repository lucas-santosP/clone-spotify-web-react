import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { albumServices, tagServices } from "./services/modules";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Search from "./views/Search";
import MyLibrary from "./views/MyLibrary";
import LoadingView from "./components/ui/LoadingView";

function Routes() {
  const [albums, setAlbums] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagsInChart, setTagsInChart] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      const fetchedAlbums = await await albumServices.get();
      setAlbums([...fetchedAlbums]);

      const fetchedTags = await tagServices.get();
      setTags([...fetchedTags]);

      const fetchedTagsChart = await tagServices.getTopInChart();
      setTagsInChart([...fetchedTagsChart]);

      setIsFetching(false);
    }

    fetchAll();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Footer />

      <main className="app-main">
        {isFetching ? (
          <LoadingView />
        ) : (
          <Switch>
            <Route
              path="/home"
              render={(props) => <Home {...props} albums={albums} />}
            />
            <Route
              path="/search"
              render={(props) => (
                <Search {...props} tags={tags} tagsInChart={tagsInChart} />
              )}
            />
            <Route path="/my-library" component={MyLibrary} />

            <Redirect to="/home" />
          </Switch>
        )}
      </main>
    </BrowserRouter>
  );
}

export default Routes;
