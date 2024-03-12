import React from "react";
import './personal.css'
export const Personal = () => {
    return(
        <div className="personal">
            <div>
                <label htmlFor="id">ID Number: </label>
                <input type="text" id="id" name="id" placeholder="21CS0XX" required/><br />
                <label htmlFor="fname">First Name: </label>
                <input type="text" id="fname" name="firstName" placeholder="Robert" required/><br />
                <label htmlFor="sname">Second Name: </label>
                <input type="text" id="sname" name="secondname" placeholder="" required/><br/>
                <label htmlFor="lname">Last Name: </label>
                <input type="text" id="lname" name="lastName" placeholder="Downey" required/><br/>
                <label htmlFor="dob">Date of Birth: </label>
                <input type="date" id="dob" name="birthday" required/><br/>
                <label htmlFor="male">Gender: </label>
                <input type="radio" name="gender" value="male" id="male" required/>Male 
                <input type="radio" name="gender" id="female" value="female"required/>Female<br/>
            </div>
            <div className="next">
                <button className="nextpage">Next</button>
            </div>
        </div>
    );
}

export default Personal;