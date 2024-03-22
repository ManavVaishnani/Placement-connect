import React, { useEffect, useState } from "react";
import "./personalProfile.css";
import { Progress } from "./components/progress";
import { Personal } from "./components/personal";
import { Contact } from "./components/contact";
import { Education } from "./components/education";
import { Interest } from "./components/intrest"; 


const views = ["personal", "contact", "education", "progress", "interest"];

export const ProfileForm = () => {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [formData, setFormData] = useState({});
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
  const fetchdata = () => {
    fetch('http://localhost:5000/api/get_contact_info?id=21cs002', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => response.json())
        .then(data => {
          
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
      
    // Effect to fetch personal data when the component mounts
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
      case "interest":
        return <Interest />;
      default:
        return <Personal onDataUpdate={updateFormData} />;
    }
  };

  const handleButtonClick = (index) => {
    setCurrentViewIndex(index);
  };

  const handleNext = () => {
    setCurrentViewIndex((prevIndex) => (prevIndex + 1) % views.length);
  };

  return (
    <div id="main">
      <div className="sidebar">
        {/* Add sidebar content here */}
      </div>
      <div className="main-content">
        <nav className="navbar">
          <div className='Menu'>
              {/* <MenuIcon style={{ fontSize: '3.5vh' }}/> */}
          </div>
          <div className='Title'>
              PlacementConnect
          </div>
          <div className={`menu-button`} >
          </div>
          <ul className={`menu`}></ul>
        </nav>
        <div className="profile-form">
            <div className='profilePhoto'>
            </div>
            <div className='basicInfo'>
                <h1>{localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</h1>
                <h1>{localStorage.getItem('student_id')}</h1>
                <h4>15/12/2003</h4>
            </div>
            {/* <button id='edit' type="submit">Edit</button>
            <button id='save' type="submit" onClick={handleSave}>Save</button> */}
        </div>
        <br />
        <div className="buttonGroup">
          {views.map((view, index) => (
            <button
              key={index}
              id={view}
              onClick={() => handleButtonClick(index)}
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
