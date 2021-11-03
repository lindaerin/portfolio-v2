import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import DesignPage from "./pages/DesignPage";
import ScrollTop from "./components/ScrollTop";

import "../src/index.css";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ScrollTop />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/work" component={WorkPage} exact />
        <Route path="/design" component={DesignPage} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
