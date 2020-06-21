import React from "react";
// import "./App.css";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="sm">
      <div className="App">
        {/* <header className="App-header">
         <h1 className="center-align">Google Books Search</h1>
      </header> */}
        <div>
          <h2>hola mundo!</h2>
          <Button variant="contained" color="secondary">
            Hello World
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
