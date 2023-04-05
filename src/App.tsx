import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import TheTeam from "./Pages/TheTeam";
import TeamMember from "./Pages/TeamMember";
import Productions from "./Pages/Productions";
import ProductionProfile from "./Pages/ProductionProfile";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/the_team" element={<TheTeam />} />
        <Route path="/the_team/team_member/:id" element={<TeamMember />} />
        <Route path="/productions" element={<Productions />} />
        <Route
          path="/productions/production/:id"
          element={<ProductionProfile />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
