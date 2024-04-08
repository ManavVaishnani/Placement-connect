// import React from "react";
import React, { useState } from "react";
import './remarksForStudents.css';
import ProfilePopup from "./ProfilePopup";

export const Remarks = () => {
    const [showProfilePopup, setShowProfilePopup] = useState(false);

    const toggleProfilePopup = () => {
        setShowProfilePopup(!showProfilePopup);
    };

    return(
        <div className="remarks-container">
            <div className="remarks">
                <div className="idandname">
                    <h2 className="idNo">ID Number</h2>
                    <h2 className="name">Name</h2>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile" onClick={toggleProfilePopup}>Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                
            </div>
            {showProfilePopup && (
                <ProfilePopup onClose={toggleProfilePopup} />
            )}
        </div>
    );
} 

export default Remarks;