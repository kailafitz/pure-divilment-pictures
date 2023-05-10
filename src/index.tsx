import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./Styling/styles.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { responsiveTheme } from "./Styling/Theme";
import "./Styling/Fonts/great-sejagad-font/GreatSejagad-JRpMM.ttf";
import "./Styling/Fonts/a-applicant-signature-font/ApplicantSignature-3zXKX.ttf";
import "./Styling/Fonts/free-pen-font/FreePen-RVq6.ttf";
import "./Styling/Fonts/striverx-font/Striverx-j5Vj.ttf";
import "./Styling/Fonts/takota-font/Takota-BRa8.ttf";
import "./Styling/Fonts/forturn-font/Forturn-9Y94y.ttf";
import "./Styling/Fonts/fake-serif-font/FakeSerif-K4dp.ttf";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
