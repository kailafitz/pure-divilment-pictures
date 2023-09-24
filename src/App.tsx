import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import TheCreatives from "./Pages/TheCreatives";
import CompanyCreativeProfile from "./Pages/CreativeProfile";
import Productions from "./Pages/Productions";
import ReachOut from "./Pages/ReachOut";
import { Logo } from "./Components/Logo";
import { Box, Container, Typography, useTheme } from "@mui/material";
import OpeningAnimation from "./Components/Home/OpeningAnimation";

function App() {
  // const [disabled, setDisabled] = useState(false);

  // setTimeout(() => {
  //   setDisabled(true);
  // }, 5500);

  const location = useLocation();
  const current = location.pathname;

  const theme = useTheme();

  return (
    <>
      {current.includes("test") && <Navbar />}
      {/* {!disabled && <OpeningAnimation />} */}
      <Container maxWidth="xl" disableGutters={true}>
        <Routes>
          <Route path="/test" element={<Home />} />
          <Route path="/test/about" element={<About />} />
          <Route path="/test/the-creatives" element={<TheCreatives />} />
          <Route
            path="/test/the-creatives/creative/:id"
            element={<CompanyCreativeProfile />}
          />
          <Route path="/test/productions/:id" element={<Productions />} />
          <Route path="/test/reach-out" element={<ReachOut />} />
        </Routes>
      </Container>
      {current.includes("test") && <Footer />}
      {current === "/" && (
        <Box
          sx={{
            background: theme.palette.primary.main,
            margin: "0 auto",
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "a div": {
              margin: "0 auto",
              paddingBottom: ".5rem",
            },
          }}
        >
          <Logo
            color={theme.palette.white.main}
            style={{
              margin: "0 auto",
              display: "block",
              svg: {
                margin: "0 auto",
                display: "block",
              },
            }}
          />
          <Typography
            variant="body1"
            textAlign="center"
            color={theme.palette.white.main}
          >
            Coming Soon in 2023
          </Typography>
        </Box>
      )}
    </>
  );
}

export default App;
