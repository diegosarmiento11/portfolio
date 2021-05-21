import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { BrowserRouter as Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import './_hamburguer.scss';
import { HashLink } from 'react-router-hash-link';

function HamburguerMenu() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar =  () => setSidebar(!sidebar);
  return (
      <>
        <div className="navbar">
          <Link to="#" className='menu__bars'>
              <FaIcons.FaBars onClick={showSidebar}/>
          </Link>
        </div>
          <nav className={sidebar ? 'nav__menu active' : 'nav__menu'}>
            <ul className='nav__menu--items' onClick={showSidebar}>
              <li className='navbar__toggle'>
                <Link to="#" className='menu__bars'>
                  <AiIcons.AiOutlineClose/>
                </Link>
              </li>
                {SideBarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}> 
                      <HashLink to={item.path} >
                        {item.icon} 
                        <span className='icon__span'>
                          {item.title}
                          </span>
                      </HashLink>      
                    </li> 
                    );
                  } ) }
                </ul>
          </nav>
      </ >
    );
}

export default HamburguerMenu;
