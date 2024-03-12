import React from "react";
import './progress.css';

export const Progress = () => {
    return(
       
        <div className="progress">
            <div>
                <label htmlFor="pname">Project Name: </label>
                <input type="text" id="pname" name="pname" required/><br />
                <label htmlFor="tech">Technology: </label>
                <input type="text" name="tech" id="tech" required/> <br />
                <label htmlFor="pdesc">Project Description: </label>
                <input type="text" name="pdesc" id="desc" required/> <br />
                <label htmlFor="role">Your role in this project: </label>
                <input type="text" name="role" id="role" required/> <br />
                <label htmlFor="achievement">Achievements: </label>
                <input type="text" name="achievement" id="achievement" required/> <br />
                <label htmlFor="linkedin">Linkedin Link: </label>
                <input type="url" name="linkedin" id="linedin" required/> <br />
                <label htmlFor="gihtub">Github Link: </label>
                <input type="url" name="github" id="github" required/> <br />
                <label htmlFor="blog">Blog link: </label>
                <input type="url" name="blog" id="blog" required/> <br />
                <label htmlFor="codelink">Hakerrank/codechef/leetcode: </label>
                <input type="url" name="codelink" id="codelink" required/> <br />
                <label htmlFor="other">Other: </label>
                <input type="url" name="other" id="other" /> <br />
            </div>
            <div className="next">
                <button className="addProject">Add Project</button><br />
                <button className="save">save</button>
                <button className="nextpage">Next</button>
            </div>
        </div>

    );
}

export default Progress;