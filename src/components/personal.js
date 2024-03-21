import React, { useState ,useEffect} from "react";
import './personal.css';

export const Personal = () => {
  // State to manage input values
  const [personalData, setPersonalData] = useState({
    id: "",
    firstName: "",
    secondName: "",
    lastName: "",
    birthday: "",
    gender: ""
  });
  console.log(personalData);
  
  // Function to fetch personal data from the backend
  const fetchPersonalData = () => {
    const id = localStorage.getItem('student_id');
  fetch('http://localhost:5000/api/get_personal_info?id='+id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json())
      .then(data => {
        const formattedDate = new Date(data.Dob).toISOString().split('T')[0];
        console.log('Success:', data);
        document.getElementById('id').value = data['collage_id'];
        document.getElementById('fname').value = data['firstName'];
        document.getElementById('sname').value = data['secondName'];
        document.getElementById('lname').value = data['lastName'];
        document.getElementById('dob').value = formattedDate;
        document.getElementById(data['gender']).checked = true; 
        setPersonalData({
          ...personalData,
          ['id']: data['collage_id'],
          ['firstName']:data['firstName'],
          ['secondName']:data['secondName'],
          ['lastName']:data['lastName'],
          ['birthday']:formattedDate,
          ['gender']:data['gender']
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
    
  // Effect to fetch personal data when the component mounts
  useEffect(() => {
    fetchPersonalData();
  }, []);

  // Event handler to update input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value
    });
  };
  const handleSave = () => {
    // Send personalData to backend here
    console.log("Sending data to backend:", personalData);
    // You can use fetch or any other method to send data to the backend
     // Send personalData to backend
     fetch('http://localhost:5000/api/insert_personal_info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(personalData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Data saved successfully');
      // You can do something after successful response from backend
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };


//   onSave = personalData;
  // Event handler to trigger save action
  // useEffect(() => {
  //   onDataUpdate(personalData);
  // }, [personalData, onDataUpdate]);

  return(
    <div className="personal">
      <div>
        <label htmlFor="id">ID Number: </label>
        <input type="text" id="id" name="id" placeholder="21CS0XX" required onChange={handleChange} /><br />
        <label htmlFor="fname">First Name: </label>
        <input type="text" id="fname" name="firstName" placeholder="Robert" required onChange={handleChange} /><br />
        <label htmlFor="sname">Second Name: </label>
        <input type="text" id="sname" name="secondName" placeholder="" required onChange={handleChange} /><br/>
        <label htmlFor="lname">Last Name: </label>
        <input type="text" id="lname" name="lastName" placeholder="Downey" required onChange={handleChange} /><br/>
        <label htmlFor="dob">Date of Birth: </label>
        <input type="date" id="dob" name="birthday" required onChange={handleChange} /><br/>
        <label>Gender: </label>
        <input type="radio" name="gender" id="male" value="male" required onChange={handleChange} />Male 
        <input type="radio" name="gender" id="female" value="female" required onChange={handleChange} />Female<br/>
      </div>
      <div className="next">
        <button className="save" onClick={handleSave}>save</button>
      </div>
    </div>
  );
}

export default Personal;
