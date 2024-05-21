
import React, { useState } from 'react';
import './personalProfile.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';

export const Dashboard = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (

    <div>
    
    <nav className="navbar">

          <div className='Menu'>
              <MenuIcon style={{ fontSize: '3.5vh' }}/>
          </div>
          <div className='Title'>
              PlacementConnect
          </div>
          <div className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          </div>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>

          </ul>
      </nav>
      
     
      <div className="profile-personal">
      
      <div className="frameset">
      {/* <OtherHousesOutlinedIcon style={{ fontSize: '3.5vh' }}/> */}
       <div className='Home'>
       
              
          </div>
      </div>
      {/* <div>
        <div className='Placement_Sec'>
        Placement Section
        <div className='Announcement_Sec'>
        Announcement Section
      </div>
      <div className='material_Sec'>
        material Section
      </div>
      </div>
      </div> */}
      
      
    </div>
          </div>
  );
};

export default Dashboard;