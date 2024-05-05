import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import WorkIcon from '@mui/icons-material/Work';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CampaignIcon from '@mui/icons-material/Campaign';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
const INPUT_CLASS =
  "px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500";
const BUTTON_CLASS = "px-4 py-2 text-sm font-medium";
const TEXTAREA_CLASS =
  "w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500";

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
const UploadSection = () => {
  return (
    <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 mb-4 relative">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <i className="fas fa-cloud-upload-alt text-purple-300 text-6xl"></i>
          <span className="block text-zinc-400 font-normal">
            Drag your file(s) to start uploading
          </span>
          <input
            type="file"
            className="mt-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg"
            multiple
          />
        </div>
      </div>
    </div>
  );
};


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex flex-col items-center justify-center m-20 flex-1">
          <div className="flex flex-col w-11/12 border-2 border border-purple-200 rounded-lg p-4">
            <div className="flex space-x-2 mb-4">
              <Link to="/addplacement">
                <button className={`${BUTTON_CLASS} text-white-600 border-zinc-200 hover:bg-zinc-100`}>
                  Placement
                </button>
              </Link>
              <Link to="/addan">
                <button className={`${BUTTON_CLASS} text-white-600 border-zinc-200 hover:bg-zinc-100`}>
                  Announcement
                </button>
              </Link>
              <Link to="/addma">
                <button className={`${BUTTON_CLASS} text-white-600 border-zinc-200 hover:bg-zinc-100`}>
                  Material
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Title" className={INPUT_CLASS} />
              <input type="text" placeholder="Subject or domain" className={INPUT_CLASS} />
            </div>
            <textarea placeholder="Description" className={TEXTAREA_CLASS}></textarea>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
              <UploadSection />
              <button className="bg-purple-600 text-white rounded-lg  w-20 h-[35px] mt-[60px]">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
