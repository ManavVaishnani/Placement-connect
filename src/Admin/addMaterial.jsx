import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import WorkIcon from '@mui/icons-material/Work';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CampaignIcon from '@mui/icons-material/Campaign';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const buttonClass = "px-4 py-2 rounded-lg focus:outline-none";
const inputClass = "border-2 border-purple-300 rounded-lg p-2 w-full";
const textareaClass = "border-2 border-purple-300 rounded-lg p-2 w-full h-32";
const labelClass =
  "w-64 flex flex-col items-center px-4 py-6 bg-white text-purple-600 rounded-lg shadow-lg tracking-wide uppercase border border-purple-300 cursor-pointer hover:bg-purple-100";

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
          <Link to="/admin_dashboard" className="text-purple-700 hover:text-purple-900 flex items-center">
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

const Material = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState(null);
    // console.log(title);
    const handleFileChange = (e) => {
      // Update file state with the selected file
      setFiles(e.target.files[0]);
    };
    const handleSubmit = async (e) => {
      console.log("bhavya");
      e.preventDefault();
      console.log("Title:", title);
      console.log("subject:", subject);
      console.log("Description:", description);
      console.log("File:", files);
      let formData = new FormData();
      formData.append('type', 'material');
      formData.append('title', title);
      formData.append('subject', subject);
      formData.append('description', description);
      // files.forEach((file) => {
          formData.append('file', files);
      // });
      console.log(formData);
      try {
        const response = await fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData, // Use 'body' instead of 'data'
        });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log(data); // handle success
          alert(data['message']);
      } catch (error) {
          console.error('Error:', error); // handle error
      }
    }


  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />
        <div className="max-w-4xl m-20 mx-auto p-6 bg-white shadow-lg rounded-lg">
          <div className="flex space-x-2 mb-6">
            
            <Link to="/addplacement">
              <button
                className={`${buttonClass} text-white-600 border-zinc-200 hover:bg-zinc-100`}
              >
                Placement
              </button>
            </Link>
            <Link to="/addan">
              <button
                className={`${buttonClass} text-white-600 border-zinc-200 hover:bg-zinc-100`}
              >
                Announcement
              </button>
            </Link>
            <Link to="/addma">
              <button
                className={`${buttonClass} text-white-600 border-purple-200 hover:bg-purple-100`}
              >
                Material
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" className={inputClass} />
            <input
              type="text"
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject or domain"
              className={inputClass}
            />
          </div>
          <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Description" className={textareaClass}></textarea>
          <button onClick={handleSubmit} className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg float-right focus:outline-none">
            Post
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 mb-4 relative">
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center">
                <i className="fas fa-cloud-upload-alt text-purple-300 text-6xl"></i>
                <span className="block text-zinc-400 font-normal">
                  Drag your file(s) to start uploading
                </span>
                <input
                  type="file"
                  onChange={handleFileChange} 
                  className="mt-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg"
                  multiple
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;
