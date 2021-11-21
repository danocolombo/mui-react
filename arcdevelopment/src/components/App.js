import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./ui/header";
import theme from "./ui/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" component={() => <div>HOME</div>}/>
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route exact path="/customsoftware" component={() => <div>Custom Software</div>} />
          <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>} />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route exact path="/revolution" component={() => <div>Revolution</div>} />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/contact" component={() => <div>Contact Us</div>} />
          
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );  
}

export default App;
