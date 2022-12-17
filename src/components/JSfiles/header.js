import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../../images/icons.svg';
import '../CSSfiles/header.css';

const Navbar = () => (
  <div className="header-container">
    <Link to="/">
      <div>
        <svg className="back-arrow">
          <use className="white-color" xlinkHref={`${icons}#icon-chevron-left`} />
        </svg>
      </div>
    </Link>
    <div className="most-veiws">Most Veiws</div>
    <div className="right-container">
      <svg className="mic-setting">
        <use className="white" xlinkHref={`${icons}#icon-microphone`} />
      </svg>
      <svg className="mic-setting">
        <use className="white" xlinkHref={`${icons}#icon-settings`} />
      </svg>
    </div>
  </div>
);

export default Navbar;
