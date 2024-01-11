import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Home.css';
import Sdv from '../ASSETS/sdv.jpeg';
import sdv from '../ASSETS/kirrack.png';
import veh from '../ASSETS/vehicle.jpg'
import { Fade } from "react-reveal";
import Timeline from "../Timeline/Timeline";
import Button from "../Button/button";
import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (<div >

        <body style={{ padding: "0px" }}>
            <div className="container">
                <nav id="navbar">

                    <div className="nav-logo">

                    </div>
                </nav>
                <div>
                    <div className="content">
                        <Fade>  <h3 style={{fontSize:"50px",marginTop:"30px",marginBottom:"40px"}}>SELF DRIVING VEHICLES</h3></Fade>
                        <Fade>  <h1>Neccesity is the mother of Invention</h1></Fade>
                        <Fade> <p style={{fontSize:"25px"}}>Self-driving cars will enable car-sharing even in spread-out suburbs.<br />A car will come to you just when you need it. <br />And when you are done with it, the car will just drive away,<br />So you won’t even have to look for parking.</p></Fade>
                    <button style={{height:"60px",width:"150px"}}><span style={{fontSize:"25px"}}>Register</span></button>
                    </div>
                </div>


            </div>
            <div className="context textcenter ">

                <h3 className="textgreen" style={{ fontSize: "28px" }}>How SDV Revolutionize</h3>



                <h2 style={{ fontSize: "16px" }}></h2>
                <p style={{fontSize:"19px"}}>Artificial Intelligence has changed how many actions are performed by individuals, leading to what one could call a digital revolution. <br />
                    Self-driving cars are part of this new revolution and appear as one of the most promising technologies in our society.<br />
                    The equipment of these vehicles with Artificial Intelligence systems run by sophisticated algorithms might change forever how transportation and driving are conceived by humanity.<br />
                    This technological advancement in the automobile industry has demonstrated the significant advantages that society will benefit from, including enhanced safety, increased mobility, and environmental impact.
                </p>

            </div>
            <div className="container2">
                <div className="fern">
                    <img src={Sdv} alt="" />

                </div>


                <div className="context2">

                    <div className="ferncontext">
                        <h3 className="textgreen">About Us</h3>
                        <h3 className="lightertext"></h3>
                        <p style={{fontSize:"19px"}}>SAE International is a professional association and standards development organization for the engineering industry, with a special focus on transport sectors such as automotive, aerospace and commercial vehicles. The organization was originally established as the Society of Automotive Engineers.We are the Society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur.— 
                        </p>
                        <Button />
                    </div>

                </div>
            </div>


            <div className="forest">

                <div className="forest__context">
                    <div className="forest--text">
                        <div className="forest__paragraph">
                        </div>
                        <div className="forest__heading">

                            <h1 className="hfx">Event Timeline</h1>
                        </div>
                    </div>
                </div>
                <Timeline />


            </div>

            <div className="about">

                <div className="about__context">
                    <div className="about--text">


                        <div className="about__paragraph">
                        </div>

                    </div>
                </div>


            </div>
        </body>




    </div>
    )
}
export default Home;
