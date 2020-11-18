import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Opinions from "./components/pages/Opinions";
import Contact from "./components/pages/Contact";
import Header from "./components/pages/Header";
import SearchBar from "./components/layout/SearchBar";
import SearchFilter from "./components/layout/SearchFilter";
import Footer from "./components/layout/Footer";

import MockArticles from "./components/layout/MockArticles";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SearchBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/opinions" component={Opinions} />
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/news" component={News} />

          {/* Test Components by Judy */}
          <Route exact path="/searchfilter" component={SearchFilter} />

          <Route exact path="/mockarticles" component={MockArticles} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
