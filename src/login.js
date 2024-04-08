import React, { useState } from "react"
import "./login.css"
import { useNavigate } from 'react-router-dom';   
export const Login = (userId) => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const[isPressed, setIsPressed] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate(); 
    const [error, setError] = useState('');
    const [emailPass, setEmailpass] = useState({
      email:"",
      passWord:""
  });
  
    async function handleLogin (){
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPass),
      }).then(response => response.json())
      .then(data => {
        console.log("x = ",data);
        
        if (data.error) {
          // If the response contains an error message from the backend
          setIsPressed(false); // Reset button state
          setError(data.error); // Set error state
          // document.getElementById("eroor").innerText = data.error;
            document.getElementById('userId').value="";
          document.getElementById('passWord').value="";
          alert(data.error);
        }else{
          localStorage.setItem('student_id', data['Collage_id']);
          localStorage.setItem('firstName', data['firstName']);
          localStorage.setItem('lastName', data['lastName']);
          navigate("/career");
        }
        
      }).catch((error) => {
        console.error('Error:', error);
      });
    };
    const handleInput = (e)=>{
      const { name, value } = e.target;
      setEmailpass({
      ...emailPass,
      [name]: value
    })};
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
        name="email"
        placeholder="Enter your College ID"
        className="user-id-input"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleInput}
        required
      />

      </div>
      <div>
          <input
              type="password"
              id="passWord"
              name="passWord"
              placeholder="Password"
              className="password-input"
              required
              onInput={handleInput}
          /> 
      </div>
      <div>
          <button type="submit" title="Login" className={`login-btn ${isPressed ? 'pressed' : ''}`} onClick={handleLogin} disabled={isPressed}>
          {isPressed ? 'Logging in...' : 'LOGIN'}
        </button>
        {/* <p className="error-message"id="error"></p> */}
        {error && <p className="error-message" id="error">{error}</p>}
      </div>
      
      </div>
    </div>
  );
};

export default Login;