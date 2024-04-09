import React, { useEffect, useState } from "react";
import "./ProfilePopup.css";
import { logRoles } from "@testing-library/react";

const ProfilePopup = ({ onClose,studentId }) => {
    // console.log(studentId);
    const [contacInfo,setcontactInfo] = useState({});
    const [personalInfo,setPersonalInfo] = useState({});
    const [educationInfo,seteducationInfo] = useState({});
    const formatDate = (timestampString) => {
        // Create a new Date object from the timestamp string
        const date = new Date(timestampString);
    
        // Extract year, month, and day from the date object
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding 1 because months are 0-indexed
        const day = ('0' + date.getDate()).slice(-2);
    
        // Construct the formatted date string
        const formattedDate = `${day}-${month}-${year}`;
    
        return formattedDate;
      };
    useEffect(()=>{
        const fetchContactData = async () => {
            try {
                const responseStudent = await fetch('http://localhost:5000/api/get_contact_info?id='+studentId['Collage_id']);
                const studentData = await responseStudent.json();
                console.log("x = ",studentData);
                setcontactInfo(studentData);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };
        const fetchPersonalData = async () => {
            try {
                const responseStudent = await fetch('http://localhost:5000/api/get_personal_info?id='+studentId['Collage_id']);
                const studentData = await responseStudent.json();
                console.log("y = ",studentData);
                setPersonalInfo(studentData);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };
        const fetchEducationData = async () => {
            try {
                const responseStudent = await fetch('http://localhost:5000/api/get_education_info?id='+studentId['Collage_id']);
                const studentData = await responseStudent.json();
                console.log("z = ",studentData);
                seteducationInfo(studentData);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };
        // Fetch data from both APIs simultaneously
        Promise.all([fetchPersonalData(), fetchEducationData(),fetchContactData()])
            .then(() => {
                console.log('Data fetched successfully');
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },[]);
    
    
    return (
        <div className="profile-popup">
            <div className="profile-popup-content-container">
                <div className="profile-popup-content">
                    <h3>{studentId['firstName']} {studentId['lastName']}</h3>
                    <h3>{studentId['Collage_id']}</h3>
                    <div className="personalInfo-container">
                        <label htmlFor="fname">First Name: </label>
                        <span id="fname">{personalInfo['firatName']}</span><br />
                        <label htmlFor="sname">Second Name: </label>
                        <span id="sname">{personalInfo['secondName']}</span><br />
                        <label htmlFor="lname">Last Name: </label>
                        <span id="lname">{personalInfo['lastName']}</span><br />
                        <label htmlFor="dob">Date of Birth: </label>
                        <span id="dob">{formatDate(personalInfo['Dob'])}</span><br />
                        <label htmlFor="gender">Gender: </label>
                        <span id="gender">{personalInfo['gender']}</span><br />
                        <hr />
                    </div>
                    <div className="contact-container">
                        <label htmlFor="charusatmail">Charusat Mail: </label>
                        <span id="charusatmail">{contacInfo['charusat_email']}</span><br />
                        <label htmlFor="permail">Personal Mail: </label>
                        <span id="permail">{contacInfo['personal_email']}</span><br />
                        <label htmlFor="cno">Contact No. : </label>
                        <span id="cno">{contacInfo['contact_no']}</span><br />
                        <label htmlFor="pno">Parent No. : </label>
                        <span id="pno">{contacInfo['parent_no']}</span><br />
                        <label htmlFor="padd">Permenent Address: </label>
                        <span id="padd">{contacInfo['address']}</span><br />
                        <label htmlFor="pcity">Permenent City: </label>
                        <span id="pcity">{contacInfo['city']}</span><br />
                        <label htmlFor="pin">PIN Code: </label>
                        <span id="pin">{contacInfo['pincode']}</span><br />
                        <hr />
                    </div>
                    <div className="education-container">
                        <label htmlFor="sscb">SSC Board:</label>
                        <span id="sscb">{educationInfo['sscBoard']}</span><br />
                        <label htmlFor="hscb">HSC Board:</label>
                        <span id="hscb">{educationInfo['hscBoard']}</span><br />
                        <label htmlFor="sscp">SSC Percentage:</label>
                        <span id="sscp">{educationInfo['sscPercentage']}%</span><br />
                        <label htmlFor="hscp">HSC Percentage:</label>
                        <span id="hscp">{educationInfo['hscPercentage']}%</span><br />
                        <label htmlFor="dp">Diploma Percentage</label>
                        <span id="dp">{educationInfo['diplomaPersantage']}%</span><br />
                        <label htmlFor="sem1">SEM 1 SGPA: </label>
                        <span id="sem1"> {educationInfo['sem1SGPA']} </span>
                        <label htmlFor="sem2">SEM 2 SGPA: </label>
                        <span id="sem2"> {educationInfo['sem12SGPA']} </span> <br />
                        <label htmlFor="sem3">SEM 3 SGPA: </label>
                        <span id="sem3"> {educationInfo['sem3SGPA']} </span>
                        <label htmlFor="sem4">SEM 4 SGPA: </label>
                        <span  id="sem4"> {educationInfo['sem4SGPA']} </span> <br />
                        <label htmlFor="sem5">SEM 5 SGPA: </label>
                        <span id="sem5"> {educationInfo['sem5SGPA']} </span>
                        <label htmlFor="sem6">SEM 6 SGPA: </label>
                        <span id="sem6"> {educationInfo['sem6SGPA']} </span> <br />
                        <label htmlFor="sem7">SEM 7 SGPA: </label>
                        <span id="sem7"> {educationInfo['sem7SGPA']} </span>
                        <label htmlFor="sem8">SEM 8 SGPA: </label>
                        <span id="sem8"> {educationInfo['sem8SGPA']} </span><br />
                        <label htmlFor="allcgpa">Overall CGPA(Till last sem): </label>
                        <span id="allcgpa"> {educationInfo['overallCGPA']} </span>
                        <hr />
                    </div>
                    <div className="progress-container">
                        <label htmlFor="pname">Project Name: </label>
                        <span id="pname">Project Management System</span><br />
                        <label htmlFor="tech">Technology: </label>
                        <span id="tech">HTML, CSS, JS</span><br />
                        <label htmlFor="pdesc">Project Description: </label>
                        <span id="pdesc"></span><br />
                        <label htmlFor="role">Your role in this project: </label>
                        <span id="role">Lead Developer & Designer</span><br />
                        <label htmlFor="achievement">Achievements: </label>
                        <span id="achievement"></span><br />
                        <label htmlFor="linkedin">Linkedin Link: </label>
                        <span id="linkedin"></span><br />
                        <label htmlFor="gihtub">Github Link: </label>
                        <span id="github"></span><br />
                        <label htmlFor="blog">Blog link: </label>
                        <span id="blog"></span><br />
                        <label htmlFor="codelink">Hakerrank/codechef/leetcode: </label>
                        <span id="codelink"></span><br />
                        <label htmlFor="other">Other: </label>
                        <span id="other"></span><br />
                        <hr />
                    </div>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePopup;