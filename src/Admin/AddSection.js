import React, { useEffect, useState } from "react";
import "./AddSection.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Announcement } from "./AdminComponents/Announcement";
import { Material } from "./AdminComponents/Material";
import { Placement } from "./AdminComponents/Placement";

const views = ["placement", "announcement", "material"];

export const ProfileForm = () => {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [activeButtonIndex, setActiveButtonIndex] = useState(0); // State to track active button index

  // Update form data based on view
  const updateFormData = (data) => {
    setFormData((formData) => ({
      ...formData,
      [views[currentViewIndex]]: data
    }));
  };

  // Handle click on save button
  const handleSave = () => {
    // Send formData to backend
    console.log("Form Data:", formData);
    // Here you can send formData to the backend using fetch or any other method
  };

  const renderComponent = () => {
    const currentView = views[currentViewIndex];
    switch (currentView) {
      case "announcement":
        return <Announcement onDataUpdate={updateFormData} />;
      case "material":
        return <Material onDataUpdate={updateFormData} />;
      default:
        return <Placement onDataUpdate={updateFormData} />;
    }
  };

  const handleButtonClick = (index) => {
    setCurrentViewIndex(index);
    setActiveButtonIndex(index); // Set active button index
  };

  return (
    <div id="main">
      <div className="sidebar">
        {/* Add sidebar content here */}
      </div>
      <div className="main-content">
        <nav className="navbar">
          <div className='Menu'>
              <MenuIcon style={{ fontSize: '3.5vh' }}/>
          </div>
          <div className='Title'>
              PlacementConnect
          </div>
          <div className={`menu-button`} >
          </div>
          <ul className={`menu`}></ul>
        </nav>
        
        <br />
        <div className="buttonGroup2">
          {views.map((view, index) => (
            <button
              key={index}
              id={view}
              onClick={() => handleButtonClick(index)}
              style={{ backgroundColor: activeButtonIndex === index ? "white" : "#802BB1" }}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>
        {renderComponent()}
      </div>
    </div>
  );
};

export default ProfileForm;
