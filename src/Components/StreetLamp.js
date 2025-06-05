import React from 'react';
import '../App.css';

import BasicModal from './Modal';



function StreetLamp() {
  return (
    <>
    
      <h1 className="lamp-watermark">Build Smart. Scale Fast. Ship Globally.🚀</h1>
 
      <div className='lamps'>
  <input type="checkbox" name="btn" id="btn" defaultChecked />
  <div className="lamp-content">
    
   
    <div className="lamp-buildings">
      <div className="lamp-window"></div>
      <div className="lamp-window"></div>
      <div className="lamp-window"></div>
      <div className="lamp-window"></div>
      <div className="lamp-window"></div>
      <div className="lamp-window"></div>
    </div>
    <div className="lamp-ground">
      <div className="lamp-sewer"></div>
        
  <div></div>
 
       <h3 style={{paddingTop:"145px", color:"black"}}>Freelance Full-Stack & Serverless Developer turning your web ideas into scalable digital products.</h3>
    </div>
    
      
    <div className="lamp-streetlamp">
     <div style={{paddingBottom:"200px", paddingLeft:"50px" , paddingTop: "70px", color:"red"}}><h3>Light ME Up !</h3></div>
      <div className="lamp-base">
        
      </div>
      
      
      <div className="lamp-basetop">
      
        
      </div>
      <div className="lamp-pole"></div>
      
      <div className="lamp-poletop">
        
      </div>
      <div className="lamp-head">
        <label htmlFor="btn"></label>
        <div className="lamp-top"></div>
        <div className="lamp-glass"></div>
        <div className="lamp-bot"></div>
      </div>
      <div className="lamp-light">
       
      </div>
      
      <div className="lamp-ground-light">
        <div style={{display:"flex", justifyContent:"center", paddingTop:"30px"}}><BasicModal></BasicModal></div>
        
      </div>
      
    </div>
  </div>
</div>

    </>
  );
}

export default StreetLamp;
