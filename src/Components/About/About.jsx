import React from "react";
import './About.css';
import sdv from "../ASSETS/sdv.png";
import logo from "../ASSETS/logo.png";
import bheed from "../ASSETS/bheed.png";
import setup from "../ASSETS/setup.png";
import eye from "../ASSETS/eye.png";
import finished from "../ASSETS/finished.png";

const About=()=>{
    return(   <div>

   




      <header>
        <div class="container1 container_solid">
      
      <div class="title_wrapper">
      
      
            <h1 >
              ABOUT US 
            </h1>
      
           
          </div>
      
        </div>
      
        <div class="container1 container_image" aria-hidden="true">
          <div class="title_wrapper">
          </div>
          </div>
      
          
             
        
      </header>
      
      
      
      
      
      
      <div className="upp">
      
      <div className="ma">
      
        <h1 >Self Driving Vehicle <div className="roller">
          <sp id="rolltext">Setup<br/>
                      Programme<br/>
                      Control<br/>
          <sp id="spare-time">ARE YOU READY ?</sp><br/>
          </sp>
          </div>
          </h1>
          
        </div>
         </div>
      
         
      
      
      
            <section className="hero">
      
           
            <div className="containers">
      
      <div className="hero-image">
        <img src={sdv} alt=""/>
        </div>
      
        <div className="hero-content">
          <h2>SDV
      WORKSHOP
      </h2>
      
          <p className="pt">  Not long ago, self-driving cars seemed like science
      fiction. Now, it's like observing the future occurring
      right in front of us.
      Today, technology is constantly improving.
      Driverless cars are a success, proving our progress.
      Using computer tech in transportation enhances
      safety and reliability, paving the way for a safer,
      easier future</p>
            
         
        </div>
       
      </div>
      
           
              <div className="containers">
                <div className="hero-content">
                  <h2>  SOCIETY OF
       AUTOMOTIVE ENGINEERS
       Collegiate Club of NIT Durgapur
       </h2>
       
                  <p className="pt">  SAEINDIA Collegiate Club of NIT Durgapur is
       regarded as one of the biggest technical clubs  
      to acquaint the students with the domain of
       Automobile Engineering</p>
                  <button className="cta-button">More</button>      
                 
                </div>
                <div className="hero-image">
                <img src={logo} alt=""/>
                </div>
              </div>
      
      
              <div className="containers">
                <div className="hero-content">
                
                  <p className="pt">SAEINDIA Collegiate Club of NIT Durgapur was conceived with the idea
       of integrating the students of the college into the international fabric of
       automobile engineering, adhering to the core principles laid down by
       SAE International. We are a student body composed of enthusiastic
       individuals, who are always at a constant strife to learn. This strife is the
       fuel that propels us to ideate, execute, and consequently deliver a
       dynamic gamut of events, which receive extensive participation from
       various institutes. The outputs of our efforts could be appreciated in a
       better way by discussing various aspects of our club.  </p>     
      
              
       
                  </div>
              </div>
              
      
            </section>
            
          
      
      
      <div className="scroll">
      
      <div className="containerNnN">
        <div className="box">
        <img src={bheed} alt=""/>
          
        </div>
        <div className="box">
        <img src={setup} alt=""/>
          
        </div>
        <div className="box">
        <img src={eye} alt=""/>
         
        </div>
        <div className="box">
        <img src={finished} alt=""/>
       
        </div>
      </div>
      
      </div>
      
      
      <section className="hero">
           
             
            </section>
           

      </div>
      
      
        
)
}
export default About;