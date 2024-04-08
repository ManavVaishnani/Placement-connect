// import React from "react";
import React, { useState } from "react";
import './remarksForStudents.css';

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
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
                <div className="idandname2">
                    <h3 className="idNo">D22CS091</h3>
                    <h3 className="name">Manav Vaishnani</h3>
                    <button className="profile">Profile</button>
                    <button className="addRemark"> + Add Remarks</button>
                </div>
            </div>
            {showProfilePopup && (
                <div className="profile-popup">
                    {/* Content of the profile popup */}
                    <h2>Profile Popup</h2>
                    {/* You can add whatever content you want in the popup */}
                    <button onClick={toggleProfilePopup}>Close</button>
                </div>
            )}
        </div>
    );
} 

export default Remarks;