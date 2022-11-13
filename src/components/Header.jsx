import {useState} from 'react';
import '../styles/header.css';
import hamburgerIcon from '../assets/hamburger-icon.png';

const Header = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <span className="brand-name">
        Insert logo here xD
      </span>
      <button className="hamburger-menu" onClick={() => setIsNavExpanded(!isNavExpanded)}>
        <img src={hamburgerIcon} alt="hamburger-menu-icon"/>
      </button>
      <div className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;