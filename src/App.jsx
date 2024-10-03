import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import BlogPage from "./Pages/BlogPage";
import Assignment3 from "./Pages/Assignment3";
import BlogText from "./Components/Blog/BlogText";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/Assignment3" element={<Assignment3 />} />
        <Route path="/BlogText" element={<BlogText />} />
      </Routes>
    </Router>
  );
}

export default App;
