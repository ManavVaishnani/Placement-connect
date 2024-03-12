import React, { useState } from "react";
import "./personalProfile.css";
import { Progress } from "./components/progress";
import { Personal } from "./components/personal";
import { Contact } from "./components/contact";
import { Education } from "./components/education";
import { Intrest } from "./components/intrest"; 
const views = ["personal", "contact", "education", "progress", "interest"];

export const ProfileForm = () => {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  const renderComponent = () => {
    const currentView = views[currentViewIndex];
    switch (currentView) {
      case "contact":
        return <Contact />;
      case "education":
        return <Education />;
      case "progress":
        return <Progress />;
      case "interest":
        return <Intrest />;
      default:
        return <Personal />;
    }
  };

  const handleButtonClick = (index) => {
    setCurrentViewIndex(index);
  };

  const handleNext = () => {
    setCurrentViewIndex((prevIndex) => (prevIndex + 1) % views.length);
  };

  return (
    <div>
      <div className="profile-form"></div>
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
      <div className="next">
        <button className="nextpage" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
