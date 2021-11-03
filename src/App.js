import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Work from "./components/Work";
import Design from "./components/UIDesign";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ScrollTopBtn from "./components/ScrollTopBtn";
import ScrollToTop from "./components/ScrollToTop";

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
      <ScrollTopBtn />
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/work" component={Work} exact />
        <Route path="/design" component={Design} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
