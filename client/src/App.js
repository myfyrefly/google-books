import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Nav from "./components/Nav";

const headerStyle = {
  textAlign: "center",
};

function App() {
  return (
    <Router>
      <Container>
        <Grid container xs={12}>
          <Nav />
          <Grid item xs={12} style={headerStyle}>
            <h1>Search & Save Books of Interest</h1>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
