import logo from './logo.svg';
import './App.css';
import StreetLamp from './Components/StreetLamp';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
    
      <Navbar></Navbar>
      
    <StreetLamp ></StreetLamp>
    <Footer></Footer>
 
 


    </div>
  );
}

export default App;
