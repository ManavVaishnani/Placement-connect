import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import WorkIcon from '@mui/icons-material/Work';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CampaignIcon from '@mui/icons-material/Campaign';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-purple-700 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <MenuIcon className="text-white mr-2 cursor-pointer" onClick={toggleSidebar} />
          <h1 className="text-white text-2xl font-bold">PlacementConnect</h1>
        </div>
      </div>
    </nav>
  );
};

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`bg-gray-200 w-64 h-screen p-4 ${isOpen ? 'block' : 'hidden'}`}>
      <ul>
        {!isOpen && (
          <>
            <li className="mb-2">
              <Link to="/dashboard" className="text-purple-700 hover:text-purple-900 flex items-center">
                <DashboardIcon className="mr-2" />
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/profile" className="text-purple-700 hover:text-purple-900 flex items-center">
                <PersonIcon className="mr-2" />
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/ " className="text-purple-700 hover:text-purple-900 flex items-center">
                <WorkIcon className="mr-2" />
              </Link>
            </li>
            
          </>
        )}
        {isOpen && (
          <>
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
          </>
        )}
      </ul>
    </div>
  );
};

const buttonClass = "px-4 py-2 text-sm font-semibold rounded-lg border focus:outline-none";
const inputClass = "border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-purple-300";

const UploadSection = () => {
    return (
        <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 mb-4 relative">
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <i className="fas fa-cloud-upload-alt text-purple-300 text-6xl"></i>
                    <span className="block text-zinc-400 font-normal">Drag your file(s) to start uploading</span>
                    <input type="file" className="mt-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg" multiple/>
                </div>
            </div>
        </div>
    );
};

const FormComponent = () => {
    return (
        <div className="max-w-4xl m-20 mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex space-x-4 mb-4">
                <Link to="/addplacement">
                    <button className={`${buttonClass} text-white-600 border-purple-200 hover:bg-purple-100`}>Placement</button>
                </Link>
                <Link to="/addan">
                    <button className={`${buttonClass} text-white-600 border-zinc-200 hover:bg-zinc-100`}>Announcement</button>
                </Link>
                <Link to="/addma">
                    <button className={`${buttonClass} text-white-600 border-zinc-200 hover:bg-zinc-100`}>Material</button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Title" className={inputClass}/>
                <input type="text" placeholder="Date" className={inputClass}/>
            </div>
            <input type="text" placeholder="Description" className={inputClass + " mb-4"}/>
            <input type="text" placeholder="Registration link" className={inputClass + " mb-4"}/>
            <UploadSection />
            <div className="flex justify-end">
                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg">Post</button>
            </div>
        </div>
    );
};

const ReactComponent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="flex">
                <Sidebar isOpen={sidebarOpen} />
                <FormComponent />
            </div>
        </div>
    );
};

export default ReactComponent;