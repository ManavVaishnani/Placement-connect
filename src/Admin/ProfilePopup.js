import React from "react";
import "./ProfilePopup.css";

const ProfilePopup = ({ onClose }) => {
    return (
        <div className="profile-popup">
            <div className="profile-popup-content-container">

                <div className="profile-popup-content">
                    <h3>Manav Vaishnani</h3>
                    <h3>D22CS091</h3>
                    <div className="personalInfo-container">
                        <label htmlFor="fname">First Name: </label>
                        <span id="fname">Manav</span><br />
                        <label htmlFor="sname">Second Name: </label>
                        <span id="sname">Bhaveshbhai</span><br />
                        <label htmlFor="lname">Last Name: </label>
                        <span id="lname">Vaishnani</span><br />
                        <label htmlFor="dob">Date of Birth: </label>
                        <span id="dob">15/12/2003</span><br />
                        <label htmlFor="gender">Gender: </label>
                        <span id="gender">Male</span><br />
                        <hr />
                    </div>
                    <div className="contact-container">
                        <label htmlFor="charusatmail">Charusat Mail: </label>
                        <span id="charusatmail">d22cs091@charusat.edu.in</span><br />
                        <label htmlFor="permail">Personal Mail: </label>
                        <span id="permail">test@gmail.com</span><br />
                        <label htmlFor="cno">Contact No. : </label>
                        <span id="cno">+91 9450300001</span><br />
                        <label htmlFor="pno">Parent No. : </label>
                        <span id="pno">+91 9450300001</span><br />
                        <label htmlFor="padd">Permenent Address: </label>
                        <span id="padd"></span><br />
                        <label htmlFor="pcity">Permenent City: </label>
                        <span id="pcity">Junagadh</span><br />
                        <label htmlFor="pin">PIN Code: </label>
                        <span id="pin">362001</span><br />
                        <hr />
                    </div>
                    <div className="education-container">
                        <label htmlFor="sscb">SSC Board:</label>
                        <span id="sscb">Gujarat</span><br />
                        <label htmlFor="hscb">HSC Board:</label>
                        <span id="hscb">Maharashtra</span><br />
                        <label htmlFor="sscp">SSC Percentage:</label>
                        <span id="sscp">88%</span><br />
                        <label htmlFor="hscp">HSC Percentage:</label>
                        <span id="hscp">90%</span><br />
                        <label htmlFor="dp">Diploma Percentage</label>
                        <span id="dp">85%</span><br />
                        <label htmlFor="sem1">SEM 1 SGPA: </label>
                        <span id="sem1"> 9 </span>
                        <label htmlFor="sem2">SEM 2 SGPA: </label>
                        <span id="sem2"> 9 </span> <br />
                        <label htmlFor="sem3">SEM 3 SGPA: </label>
                        <span id="sem3"> 8.5 </span>
                        <label htmlFor="sem4">SEM 4 SGPA: </label>
                        <span  id="sem4"> 9 </span> <br />
                        <label htmlFor="sem5">SEM 5 SGPA: </label>
                        <span id="sem5"> 9 </span>
                        <label htmlFor="sem6">SEM 6 SGPA: </label>
                        <span id="sem6"> 9 </span> <br />
                        <label htmlFor="sem7">SEM 7 SGPA: </label>
                        <span id="sem7"> 9 </span>
                        <label htmlFor="sem8">SEM 8 SGPA: </label>
                        <span id="sem8"> 9 </span><br />
                        <label htmlFor="allcgpa">Overall CGPA(Till last sem): </label>
                        <span id="allcgpa"> 9.33 </span>
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