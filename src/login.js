import React, { useState } from "react"
import "./login.css"
import {
    BrowserRouter,
    Routes,
    Route,
    
} from "react-router-dom";


export const ElementLoginPage = (userId) => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const[isPressed, setIsPressed] = useState(false);
    const handleLogin = () => {
    // Your login logic here
    // For now, let's simulate a successful login and navigate to loginSuccess
    setIsPressed(true);
    
  };

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };
 

  return (
    
    <div className="element-login-page">
      <div className="div">
        <div className="circle">
          <div className="ellipse" />
        </div>
        <div className="text-wrapper">
        LOGIN
        </div>
        <div className={`user-id-box ${isInputFocused ? 'focused' : ''}`}>

      <input
        type="text"
        id="userId"
        placeholder="Enter your College ID"
        className="user-id-input"
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
      />

    </div>

    
    <div>
        <input
            type="password"
            id="passWord"
            placeholder="Password"
            className="password-input"
            required

        /> 
    </div>
    <div>
        <button type="submit" title="Login" className={`login-btn ${isPressed?'pressed' : ''}`} onClick={()=>
        {
          setIsPressed(true);
          handleLogin();
        }
        } 
        >
     LOGIN
         </button>
    </div>
        
        
        
      </div>
    </div>
  );
};
