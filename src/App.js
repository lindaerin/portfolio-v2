import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Work from "./components/Work";
import Design from "./components/UIDesign";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ScrollTopBtn from "./components/ScrollTopBtn";
import ScrollToTop from "./components/ScrollToTop";

import "../src/index.css";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loading-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }

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
        <Route path="/work" component={Work} exact />
        <Route path="/design" component={Design} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
