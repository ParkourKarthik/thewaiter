import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuList from "./MenuList";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/tables/:tableId" component={MenuList} />
    </Router>
  );
}
