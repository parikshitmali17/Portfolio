import logo from './logo.svg';
import './App.css';
import StreetLamp from './Components/StreetLamp';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Box } from '@mui/material';
import ServiceSection from './Components/Services';
import MediaCard from './Components/Card';
import ProjectCard from './Components/ProjectCard';
import SmallCarousel from './Components/SmallCoursel';
import ProjectsGrid from './Components/ProjectGrid';



function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <StreetLamp ></StreetLamp>
    <ServiceSection></ServiceSection>
    <ProjectsGrid></ProjectsGrid>
    
<SmallCarousel></SmallCarousel>
    <Footer></Footer>
    </div>
  );
}

export default App;
