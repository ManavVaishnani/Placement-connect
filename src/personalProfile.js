import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Progress } from "./components/progress";
import { Personal } from "./components/personal";
import { Contact } from "./components/contact";
import { Education } from "./components/education";
import { Interest } from "./components/intrest"; 

const views = ["personal", "contact", "education", "progress"];

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-purple-800 p-4 fixed top-0 left-0 w-full z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-white">
          <MenuIcon style={{ fontSize: '3.5vh' }} onClick={toggleSidebar} />
          <div className="text-xl font-bold">PlacementConnect</div>
        </div>
      </div>
    </nav>
  );
};

const Sidebar = ({ isOpen, handleButtonClick }) => {
  return (
    <div className={`h-100 lg:w-1/5 bg-gray-200 ${isOpen ? '' : 'hidden'} mt-1 lg:mt-1.5`}> 
      <ul>
        <Link to="/dashboard">
          <li className="cursor-pointer py-2 px-4">Dashboard</li>
        </Link>
        {views.map((view, index) => (
          <li key={index} onClick={() => handleButtonClick(index)} className="cursor-pointer py-2 px-4">{view.charAt(0).toUpperCase() + view.slice(1)}</li>
        ))}
      </ul>
    </div>
  );
};


const ProfileForm = () => {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const updateFormData = (data) => {
    setFormData((formData) => ({
      ...formData,
      [views[currentViewIndex]]: data
    }));
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
    // Here you can send formData to the backend using fetch or any other method
  };

  const fetchdata = () => {
    fetch('http://localhost:5000/api/get_contact_info?id=21cs002', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  useEffect(() => {
    fetchdata();
  }, []);

  const renderComponent = () => {
    const currentView = views[currentViewIndex];
    switch (currentView) {
      case "contact":
        return <Contact onDataUpdate={updateFormData} />;
      case "education":
        return <Education onDataUpdate={updateFormData} />;
      case "progress":
        return <Progress />;
      default:
        return <Personal onDataUpdate={updateFormData} />;
    }
  };

  const handleButtonClick = (index) => {
    setCurrentViewIndex(index);
    setActiveButtonIndex(index);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex mt-14">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} handleButtonClick={handleButtonClick} />
      <div className={`w-full ${sidebarOpen ? 'lg:pl-0' : 'lg:pl-1/5'} bg-white`}>
        <div className="p-4">
          <div className="flex">
            <div className="profilePhoto">
              {/* Profile photo */}
            </div>
            <div className="basicInfo ml-4">
              <h1>{localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</h1>
              <h1>{localStorage.getItem('student_id')}</h1>
              <h4>15/12/2003</h4>
            </div>
          </div>
          <div className="buttonGroup mt-4 rounded-lg bg-white-100 p-2 border border-blue-300">
            {views.map((view, index) => (
              <button 
                key={index} 
                onClick={() => handleButtonClick(index)} 
                className={`bg--500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${activeButtonIndex === index ? 'bg-gray-500' : ''}`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="p-4">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
