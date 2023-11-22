import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styling/styles.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { responsiveTheme } from "./Styling/Theme";
// import ReactGA from "react-ga4";

// ReactGA.initialize("G-WYHDKQXV40");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={responsiveTheme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);
