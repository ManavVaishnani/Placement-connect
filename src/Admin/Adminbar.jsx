import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import WorkIcon from '@mui/icons-material/Work';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CampaignIcon from '@mui/icons-material/Campaign';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-purple-700 p-4 overflow-hidden" >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <MenuIcon className="text-white mr-2 cursor-pointer" onClick={toggleSidebar} />
          <h1 className="text-white text-2xl font-bold">PlacementConnect - Admin</h1>
        </div>
      </div>
    </nav>
  );
};

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`bg-gray-200 w-72 h-screen p-4 ${isOpen ? 'block' : 'hidden'}`} style={{ height: '140vh',width: "15rem"}}>
      <ul>
        <li className="mb-2">
          <Link to="/Admin" className="text-purple-700 hover:text-purple-900 flex items-center">
          <DashboardIcon className="mr-2" />
            Dashboard
          </Link>
        </li>
         <li className="mb-2">
              <Link to="/addan" className="text-purple-700 hover:text-purple-900 flex items-center">
                <CampaignIcon className="mr-2" />
                Announcement
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/addma" className="text-purple-700 hover:text-purple-900 flex items-center">
                <MenuBookIcon className="mr-2" />
                Add Material
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/addPlacement" className="text-purple-700 hover:text-purple-900 flex items-center">
                <WorkIcon className="mr-2" />
                Placement
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/remarks" className="text-purple-700 hover:text-purple-900 flex items-center">
                <AppRegistrationIcon className="mr-2" />
                remarks
              </Link>
            </li>
        {/* Add more sidebar links as needed */}
      </ul>
    </div>
  );
};


export { Navbar, Sidebar };
