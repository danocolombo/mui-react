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
          <Route exact path="/services" component={() => <div><br /><br /><br /><br />services</div>} />
          <Route exact path="/customsoftware" component={() => <div><br /><br /><br /><br />customsoftware</div>} />
          <Route exact path="/mobileapps" component={() => <div><br /><br /><br /><br />mobileapps</div>} />
          <Route exact path="/websites" component={() => <div><br /><br /><br /><br />websites</div>} />
          <Route exact path="revolution" component={() => <div><br /><br /><br /><br />revolution</div>} />
          <Route exact path="/about" component={() => <div><br /><br /><br /><br />about</div>} />
          <Route exact path="/contact" component={() => <div><br /><br /><br /><br />contact</div>} />
          
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
