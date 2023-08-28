import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import TheCreatives from "./Pages/TheCreatives";
import CompanyCreativeProfile from "./Pages/CreativeProfile";
import ProductionProfile from "./Pages/ProductionProfile";
import Productions from "./Pages/Productions";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/test" element={<Home />} />
        <Route path="/test/about" element={<About />} />
        <Route path="/test/the-creatives" element={<TheCreatives />} />
        <Route
          path="/test/the-creatives/creative/:id"
          element={<CompanyCreativeProfile />}
        />
        <Route path="/test/productions/:id" element={<Productions />} />
        <Route
          path="/test/productions/production/:id"
          element={<ProductionProfile />}
        />
        <Route path="/test/reach-out" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
