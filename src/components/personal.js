import React, { useState, useEffect } from "react";

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

  // Function to fetch personal data from the backend
  const fetchPersonalData = () => {
    const id = localStorage.getItem('student_id');
    fetch('http://localhost:5000/api/get_personal_info?id=' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(data => {
        const formattedDate = new Date(data.Dob).toISOString().split('T')[0];
        setPersonalData({
          ...personalData,
          id: data['collage_id'],
          firstName: data['firstName'],
          secondName: data['secondName'],
          lastName: data['lastName'],
          birthday: formattedDate,
          gender: data['gender']
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

  // Event handler to trigger save action
  const handleSave = () => {
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
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="personal flex flex-col">
      <div className="m-5">
        <div className="flex items-center mb-4">
          <label htmlFor="id" className="text-lg mr-2">ID Number:</label>
          <input type="text" id="id" name="id" placeholder="21CS0XX" required value={personalData.id} onChange={handleChange} className="block border border-gray-300 rounded-md p-2" />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="fname" className="text-lg mr-2">First Name:</label>
          <input type="text" id="fname" name="firstName" placeholder="Robert" required value={personalData.firstName} onChange={handleChange} className="block border border-gray-300 rounded-md p-2" />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="sname" className="text-lg mr-2">Second Name:</label>
          <input type="text" id="sname" name="secondName" placeholder="" required value={personalData.secondName} onChange={handleChange} className="block border border-gray-300 rounded-md p-2" />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="lname" className="text-lg mr-2">Last Name:</label>
          <input type="text" id="lname" name="lastName" placeholder="Downey" required value={personalData.lastName} onChange={handleChange} className="block border border-gray-300 rounded-md p-2" />
        </div>
        <div className="flex items-center mb-4">
        <label htmlFor="dob" className="text-lg mr-2">Date of Birth:</label>
        <input type="date" id="dob" name="birthday" required value={personalData.birthday} onChange={handleChange} className="block border border-gray-300 rounded-md p-2" />
        <div className="flex-grow"></div>
        <button className="save bg-purple-600 text-white rounded-md px-8 py-2" onClick={handleSave}>Save</button>
      </div>
        <div className="flex items-center mb-4">
          <label className="text-lg mr-2">Gender:</label>
          <input type="radio" name="gender" id="male" value="male" required onChange={handleChange} checked={personalData.gender === "male"} /><label htmlFor="male" className="mr-2">Male</label>
          <input type="radio" name="gender" id="female" value="female" required onChange={handleChange} checked={personalData.gender === "female"} /><label htmlFor="female">Female</label>
        </div>
        
      </div>
    </div>
  );
}

export default Personal;
