import React from "react";
import './button.css';
import { Link } from "react-router-dom";
import About from "../About/About";
const Button=()=>{
    return(
        <div>
            <Link to='/About'>
            <button>
 About
</button>
</Link>
        </div>
    )
}
export default Button;