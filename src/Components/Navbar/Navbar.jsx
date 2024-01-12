import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure your CSS file path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'; // Import individual icons
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'; 
import { faGears } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (position) => {
    const margin = 0;
    const containerWidth = document.querySelector('.bottom-nav').getBoundingClientRect().width;
    const maxLeftPosition = containerWidth; // Assuming slider width is 50px
    const left = Math.min(position.left + margin);
    setActiveItem(left);
  };

  return (
    <div>
      <ul className="bottom-nav">
        <div className="slider" style={{ right: activeItem}}></div>
        <li>
          <Link to="/" onClick={(e) => handleItemClick(e.target.getBoundingClientRect())}>
            <FontAwesomeIcon icon={faHome} style={{height:"29px",width:"40px",marginRight:" 30px",  marginLeft:"30px"}}/>
           
          </Link>
        </li>
        <li>
          <Link to="/About" onClick={(e) => handleItemClick(e.target.getBoundingClientRect())}>
            <FontAwesomeIcon icon={faInfoCircle} style={{height:"29px",width:"40px",marginRight:"30px", marginLeft:"30px"}}/>
            {/* <span>About</span> */}
          </Link>
        </li>
        <li>
          <Link
            to="/components"
            className={activeItem === null ? 'active-icon' : ''}
            onClick={(e) => handleItemClick(e.target.getBoundingClientRect())}
          >
            <FontAwesomeIcon icon={faGears} style={{height:"39px",width:"40px",marginRight:"30px",  marginLeft:"30px"}}/>
            {/* <span>Components</span> */}
          </Link>
        </li>
        <li>
          <Link to="/Gallery" onClick={(e) => handleItemClick(e.target.getBoundingClientRect())}>
            <FontAwesomeIcon icon={faImages} style={{height:"29px",width:"40px",marginRight:"30px",  marginLeft:"30px"}}/>
            {/* <span>Gallery</span> */}
          </Link>
        </li>

        {/* <li>
          <Link to="/Team" onClick={(e) => handleItemClick(e.target.getBoundingClientRect())}>
            <FontAwesomeIcon icon={faUsers} style={{height:"29px",width:"29px",paddingRight:"35px"}}/>
            
          </Link>
        </li> */}
        
      </ul>
    </div>
  );
};

export default Navbar;
