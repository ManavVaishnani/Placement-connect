import React from "react";
import './education.css';

export const Education = () => {
    return(
        <div className="education">
            <div>
                <div className="boardandmarks">
                    <div className="board">
                        <label htmlFor="sscb">SSC Board:</label>
                        <input type="text" name="sscb" id="sscb" placeholder="Gujarat"required/> <br />
                        <label htmlFor="hscb">HSC Board:</label>
                        <input type="text" name="hscb" id="hscb" placeholder="Gujarat"required/> <br />
                    </div>
                    <div className="marks">
                        <label htmlFor="sscp">SSC Percentage:</label>
                        <input type="text" name="sscp" id="sscp" placeholder="88%" required/> <br />
                        <label htmlFor="hscp">HSC Percentage:</label>
                        <input type="text" name="hscp" id="hscp" placeholder="98%" required/> <br />
                    </div>
                </div>
                <label htmlFor="dp">Diploma Percentage</label>
                <input type="text" name="dp" id="dp" placeholder="95%" required/> <br />
                <div className="sgpa">
                    <div className="sgpaodd">
                        <label htmlFor="sem1">SEM 1 SGPA: </label>
                        <input type="text" name="sem1" id="sem1" required/> <br />
                        <label htmlFor="sem3">SEM 3 SGPA: </label>
                        <input type="text" name="sem3" id="sem3" required/> <br />
                        <label htmlFor="sem7">SEM 7 SGPA: </label>
                        <input type="text" name="sem7" id="sem7" required/> <br />
                    </div>
                    <div className="sgpaeven">
                        <label htmlFor="sem2">SEM 2 SGPA: </label>
                        <input type="text" name="sem2" id="sem2" required/> <br />
                        <label htmlFor="sem3">SEM 6 SGPA: </label>
                        <input type="text" name="sem6" id="sem6" required/> <br />
                        <label htmlFor="sem8">SEM 8 SGPA: </label>
                        <input type="text" name="sem8" id="sem8" required/> <br />
                    </div>
                </div>
                <label htmlFor="allcgpa">Overall CGPA(Till last sem): </label>
                <input type="text" name="allcgpa" id="allcgpa" required/> <br />
            </div>

            <div className="next">
                <button className="nextpage">Next</button>
            </div>
        </div>
    );
}

export default Education;