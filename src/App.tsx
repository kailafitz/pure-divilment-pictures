import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
// import Home from "./Pages/Home";
import Home from "./Pages/HomeV2";
// import About from "./Pages/About";
import About from "./Pages/AboutV2";
import TheCreatives from "./Pages/TheCreatives";
import CompanyCreativeProfile from "./Pages/CompanyCreativeProfile";
import ProductionProfile from "./Pages/ProductionProfile";
import Productions from "./Pages/Productions";
// import Contact from "./Pages/Contact";
import Contact from "./Pages/ContactV2";

import ToDo from "./Pages/ToDo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/the_creatives" element={<TheCreatives />} />
        <Route
          path="/the_creatives/team_member/:id"
          element={<CompanyCreativeProfile />}
        />
        <Route path="/productions/:id" element={<Productions />} />
        <Route
          path="/productions/production/:id"
          element={<ProductionProfile />}
        />
        <Route path="/reach-out" element={<Contact />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
