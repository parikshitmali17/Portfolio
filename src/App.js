

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import StreetLamp from './Components/Intro';
import ServiceSection from './Components/Services';
import SmallCarousel from './Components/SmallCoursel';
import ProjectsGrid from './Components/ProjectGrid';
import About from './Components/About';
import Contact from './Components/Contact';
import ProjectForm from './Components/ProjectForm';
import Landing from './Components/Landing';
import Intro from './Components/Intro';

function Home() {
  return (
    <>
      <Intro/>
      <ServiceSection />
      <SmallCarousel />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<ProjectsGrid />} />
          <Route path="/About" element={<About></About>}></Route>
           <Route path="/contacts" element={<Contact></Contact>}></Route>
           <Route path="/submitProjectDetails" element={<ProjectForm></ProjectForm>}></Route>
        </Routes>
        {/* <Landing></Landing> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
