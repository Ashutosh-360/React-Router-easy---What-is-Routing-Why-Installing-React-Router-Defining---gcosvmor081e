import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "../src/Pages/Index";
import Home from "../src/Pages/Home";
import NotFound from "../src/Pages/NotFound";
import NavBar from "./components/NavBar";
const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />}/>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
