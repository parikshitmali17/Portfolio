import logo from './logo.svg';
import './App.css';
import StreetLamp from './Components/StreetLamp';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Box } from '@mui/material';
import ServiceSection from './Components/Services';
import MediaCard from './Components/Card';

function App() {
  return (
    <div className="App">
    
      <Navbar></Navbar>
      
    <StreetLamp ></StreetLamp>
    <ServiceSection></ServiceSection>
    <Footer></Footer>
    
 
 


    </div>
  );
}

export default App;
