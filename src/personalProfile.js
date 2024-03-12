import React, { useState } from 'react';
import './personalProfile.css';
import {Progress} from './components/progress';
import {Personal} from './components/personal';
import {Contact} from './components/contact';
import {Education} from './components/education';

export const ProfileForm = () => {
  const [currentView, setCurrentView] = useState('personal');

  const renderComponent = () => {
    switch (currentView) {
      case 'contact':
        return <Contact />;
      case 'education':
        return <Education />;
      case 'progress':
        return <Progress />;
      // case 'interest':
      //   return <InterestInfo />;
      default:
        return <Personal />;
    }
  };

  return (
    <div>
      <div className="profile-form">
        {/* ... (Your existing code) ... */}
      </div>
      <br />
      <div className='buttonGroup'>
        <button id='personal' onClick={() => setCurrentView('personal')}>
          Personal 
        </button>
        <button id='contact' onClick={() => setCurrentView('contact')}>
          Contact 
        </button>
        <button id='education' onClick={() => setCurrentView('education')}>
          Education 
        </button>
        <button id='progress' onClick={() => setCurrentView('progress')}>
          Progress 
        </button>
        <button id='interest' onClick={() => setCurrentView('interest')}>
          Interest 
        </button>
      </div>

      <div>
        <button className="nextpage" >Next</button>
      </div>
      {/* Render the appropriate component based on the currentView state */}
      {renderComponent()}

      
    </div>
  );
};

export default ProfileForm;