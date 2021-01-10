import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuList from "./MenuList";
import Home from "./Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/tables/:tableId" component={MenuList} />
      </Router>
    </ThemeProvider>
  );
}
