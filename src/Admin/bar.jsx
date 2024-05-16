import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-purple-700 w-screen p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <MenuIcon className="text-white mr-2 cursor-pointer" onClick={toggleSidebar} />
          <h1 className="text-white text-2xl font-bold">PlacementConnect - Student</h1>
        </div>
      </div>
    </nav>
  );
};

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`bg-gray-200 w-72 h-screen p-4 ${isOpen ? 'block' : 'hidden'}`} style={{ height: '140vh'}}>
      <ul>
        <li className="mb-2">
          <Link to="/dashboard" className="text-purple-700 hover:text-purple-900 flex items-center">
          <DashboardIcon className="mr-2" />
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/career" className="text-purple-700 hover:text-purple-900 flex items-center">
          <PersonOutlineIcon className="mr-2" />
            Profile
          </Link>
        </li>
        {/* Add more sidebar links as needed */}
      </ul>
    </div>
  );
};


export { Navbar, Sidebar };
