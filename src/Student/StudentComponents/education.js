import React, { useState, useEffect } from "react";

export const Education = () => {
  const [educationData, setEducationData] = useState({
    collage_id: localStorage.getItem('student_id'),
    sscBoard: "",
    hscBoard: "",
    sscPercentage: "",
    hscPercentage: "",
    diplomaPercentage: "",
    sem1SGPA: "",
    sem2SGPA: "",
    sem3SGPA: "",
    sem4SGPA: "",
    sem5SGPA: "",
    sem6SGPA: "",
    sem7SGPA: "",
    sem8SGPA: "",
    overallCGPA: ""
  });

  const fetcheducationData = () => {
    const id = localStorage.getItem('student_id');
    fetch(`http://localhost:5000/api/get_education_info?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
          document.getElementById('sscb').value = data['sscBoard'];
          document.getElementById('hscb').value = data['hscBoard'];
          document.getElementById('sscp').value = data['sscPercentage'];
          document.getElementById('hscp').value = data['hscPercentage'];
          document.getElementById('dp').value = data['diplomaPercentage'];
          document.getElementById('sem1').value = data['sem1SGPA'];
          document.getElementById('sem2').value = data['sem2SGPA'];
          document.getElementById('sem3').value = data['sem3SGPA'];
          document.getElementById('sem4').value = data['sem4SGPA'];
          document.getElementById('sem5').value = data['sem5SGPA'];
          document.getElementById('sem6').value = data['sem6SGPA'];
          document.getElementById('sem7').value = data['sem7SGPA'];
          document.getElementById('sem8').value = data['sem8SGPA'];
          document.getElementById('allcgpa').value = data['overallCGPA'];
          
          setEducationData({
            ...educationData,
            ['sscBoard']: data['sscBoard'],
            ['hscBoard']:data['hscBoard'],
            ['sscPercentage']:data['sscPercentage'],
            ['hscPercentage']:data['hscPercentage'],
            ['diplomaPercentage']:data['diplomaPercentage'],
            ['sem1SGPA']:data['sem1SGPA'],
            ['sem2SGPA']:data['sem2SGPA'],
            ['sem3SGPA']:data['sem3SGPA'],
            ['sem4SGPA']:data['sem4SGPA'],
            ['sem5SGPA']:data['sem5SGPA'],
            ['sem6SGPA']:data['sem6SGPA'],
            ['sem7SGPA']:data['sem7SGPA'],
            ['sem8SGPA']:data['sem8SGPA'],
            ['overallCGPA']:data['overallCGPA'],
          });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetcheducationData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationData({
      ...educationData,
      [name]: value
    });
  };

  const handleSave = () => {
    fetch('http://localhost:5000/api/insert_education_info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(educationData),
    })
      .then(response => response.json())
      .then(data => {
        alert('Data saved successfully');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="education mx-auto">
      <div className="max-w-7.5xl mx-auto">
        <div className="boardandmarks flex">
          <div className="board">
            <label htmlFor="sscb">SSC Board:</label>
            <input type="text" name="sscBoard" id="sscb" placeholder="Gujarat" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" />
            <br />
            <label htmlFor="hscb">HSC Board:</label>
            <input type="text" name="hscBoard" id="hscb" placeholder="Gujarat" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" />
            <br />
          </div>
          <div className="marks ml-10">
            <label htmlFor="sscp">SSC Percentage:</label>
            <input type="text" name="sscPercentage" id="sscp" placeholder="88%" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" />
            <br />
            <label htmlFor="hscp">HSC Percentage:</label>
            <input type="text" name="hscPercentage" id="hscp" placeholder="98%" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" />
            <br />
          </div>
        </div>
        <label htmlFor="dp">Diploma Percentage</label>
        <input type="text" name="diplomaPercentage" id="dp" placeholder="95%" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" />
        <br />
        <div className="sgpa flex">
          <div className="sgpaodd mr-10">
            <label htmlFor="sem1">SEM 1 SGPA:</label>
            <input type="text" name="sem1SGPA" id="sem1" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" /> <br />
            <label htmlFor="sem3">SEM 3 SGPA:</label>
            <input type="text" name="sem3SGPA" id="sem3" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" /> <br />
            <label htmlFor="sem5">SEM 5 SGPA:</label>
            <input type="text" name="sem5SGPA" id="sem5" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" /> <br />
            <label htmlFor="sem7">SEM 7 SGPA:</label>
            <input type="text" name="sem7SGPA" id="sem7" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" /> <br />
          </div>
          <div className="sgpaeven">
            <label htmlFor="sem2">SEM 2 SGPA:</label>
            <input type="text" name="sem2SGPA" id="sem2" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" /> <br />
            <label htmlFor="sem4">SEM 4 SGPA:</label>
            <input type="text" name="sem4SGPA" id="sem4" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" /> <br />
            <label htmlFor="sem6">SEM 6 SGPA:</label>
            <input type="text" name="sem6SGPA" id="sem6" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" /> <br />
            <label htmlFor="sem8">SEM 8 SGPA:</label>
            <input type="text" name="sem8SGPA" id="sem8" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" /> <br />
          </div>
        </div>
        <label htmlFor="allcgpa">Overall CGPA(Till last sem):</label>
        <input type="text" name="overallCGPA" id="allcgpa" required onChange={handleChange} className="border-b border-purple-600 text-lg px-2 py-1" /> <br />
        <div className="next mt-5">
          <button className="save bg-purple-600 text-white py-2 px-4 rounded-lg" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Education;
