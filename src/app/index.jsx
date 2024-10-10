import React from "react";
import "./App.css";
import Home from "./index"
import About from "./About";
import Contact from "./Contact";
import BlogPage from "./BlogPage";
import Assignment3 from "./Assignment3";
import BlogText from "./BlogText";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/Assignment3" element={<Assignment3 />} />
        <Route path="/BlogText" element={<BlogText />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}