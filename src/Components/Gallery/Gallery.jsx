import React from "react";
import Photo from "../photogallery/photogallery";
import './Gallery.css'
import { useEffect } from "react";
const Gallery=()=>{
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
return(
  
  <div  >
  <span id="bdy" style={{color:"grey" , fontSize:'70px' , alignItems:'center'}}>Gallery</span>
  <Photo/>

</div>
)
}
export default Gallery;