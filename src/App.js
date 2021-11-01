import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";

import "../src/index.css";

function App() {
  
  return (
    <Router>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar />
      {/* <ScrollTop />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/work" component={WorkPage} exact />
        <Route path="/design" component={DesignPage} exact />
      </Switch>
      
      <Footer /> */}
    </Router>
  );
}

export default App;
