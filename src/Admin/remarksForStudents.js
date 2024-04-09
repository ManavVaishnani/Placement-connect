// import React from "react";
import React, { useEffect, useState } from "react";
import './remarksForStudents.css';
import ProfilePopup from "./ProfilePopup";

export const Remarks = () => {
    const [showProfilePopup, setShowProfilePopup] = useState(false);
    const [studentinfo,setStudentinfo] = useState([]);
    const [studentId,setstudentId] = useState("");
    const toggleProfilePopup = (student_id) => {
        setstudentId(student_id);
        setShowProfilePopup(true);
    };
    const handleCloseProfilePopup = () => {
        setShowProfilePopup(false);
        setstudentId(null); // Clear selected student ID
    };
    const fetchdata = () => {
        fetch('http://localhost:5000/api/student_data', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            setStudentinfo(data);
        }).catch((error) => {
          console.error('Error:', error);
        });
    }
    useEffect(() => {
        fetchdata();
      }, []);
    return(
        
        <div className="remarks-container">
            <div className="remarks">
                <div className="idandname">
                    <h2 className="idNo">ID Number</h2>
                    <h2 className="name">Name</h2>
                </div>
                {studentinfo.map((item,index)=>(
                    <div className="idandname2" key={index}>
                        <h3 className="idNo">{item['Collage_id']}</h3>
                        <h3 className="name">{item['firstName']} {item['lastName']}</h3>
                        <button className="profile"  onClick={() => toggleProfilePopup(item)}>Profile</button>
                        <button className="addRemark"> + Add Remarks</button>
                    </div>
                ))}
            </div>
            
            {showProfilePopup && (
                <ProfilePopup onClose={handleCloseProfilePopup} studentId={studentId}  />
            )}
        </div>
    );
} 

export default Remarks;