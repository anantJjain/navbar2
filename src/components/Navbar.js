import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { SocialData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
     <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>           {/*3 bars which when clicked opens up the menu */}
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <div className='nav-menu-items,list' onClick={showSidebar}>
                <div className='navbar-toggle'>
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                </div>
           </div> 
            
            <div className='mainsocialpic'>
                <div className='main-items'>
                    {SidebarData.map((item, index) => {
                        return (
                                    <ul className='list'>
                                    <li key={index} className={item.cName}>
                                      <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                      </Link>
                                    </li>
                                    </ul>
                                );
                        })}
                </div>  
            
            <div className='pic'>
                        Hello

            </div>
            
                <div className='social-items'>
                    {SocialData.map((item, index) => {
                        return (
                                    <ul className='list'>
                                        <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                        {item.icon}
                                      </Link>
                                    </li>
                                    </ul>
                                );
                        })}
                </div>
            </div>
        </div>
     </IconContext.Provider>
    </div>
  );
}

export default Navbar;

