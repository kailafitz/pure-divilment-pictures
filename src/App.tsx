import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import TheCreatives from "./Pages/TheCreatives";
import CompanyCreativeProfile from "./Pages/CreativeProfile";
import Productions from "./Pages/Productions";
import ReachOut from "./Pages/ReachOut";
import { Container } from "@mui/material";
import OpeningAnimation from "./Components/Home/OpeningAnimation";
import PrivacyPolicy from "./Components/CookiesInfo";

function App() {
  const location = useLocation();
  const current = location.pathname;

  return (
    <>
      {current === "/" && <OpeningAnimation />}
      <Container
        maxWidth="xl"
        disableGutters={true}
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <Navbar />
        <Container
          maxWidth="xl"
          disableGutters={true}
          sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/the-creatives" element={<TheCreatives />} />
            <Route
              path="/the-creatives/creative/:id"
              element={<CompanyCreativeProfile />}
            />
            <Route path="/productions/:id" element={<Productions />} />
            <Route path="/reach-out" element={<ReachOut />} />
          </Routes>
        </Container>
        <Footer />
        <PrivacyPolicy />
      </Container>
    </>
  );
}

export default App;
