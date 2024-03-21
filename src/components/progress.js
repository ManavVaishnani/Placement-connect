import React, { useState } from "react";
import './progress.css';

export const Progress = () => {
    const [projects, setProjects] = useState([]);

    const handleAddProject = () => {
    const newProject = {
        pname: document.getElementById("pname")?.value || '',
        tech: document.getElementById("tech")?.value || '',
        pdesc: document.getElementById("desc")?.value || '',
        role: document.getElementById("role")?.value || '',
        achievement: document.getElementById("achievement")?.value || '',
        linkedin: document.getElementById("linedin")?.value || '',
        github: document.getElementById("github")?.value || '',
        blog: document.getElementById("blog")?.value || '',
        codelink: document.getElementById("codelink")?.value || '',
        other: document.getElementById("other")?.value || ''
    };
    setProjects([...projects, newProject]);
};


    return(
        <div>
            <div className="progress">
                <div>
                    <div className="Project">
                        <label htmlFor="pname">Project Name: </label>
                        <input type="text" id="pname" name="pname" required/><br />
                        <label htmlFor="tech">Technology: </label>
                        <input type="text" name="tech" id="tech" required/> <br />
                        <label htmlFor="pdesc">Project Description: </label>
                        <input type="text" name="pdesc" id="desc" required/> <br />
                        <label htmlFor="role">Your role in this project: </label>
                        <input type="text" name="role" id="role" required/> <br />
                    </div>
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
                    <button className="addProject" onClick={handleAddProject}>Add Project</button><br />
                    <button className="save">save</button>
                </div>
            </div>

            {/* <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h3>{project.pname}</h3>
                        <p>Technology: {project.tech}</p>
                        <p>Description: {project.pdesc}</p>
                        <p>Your role: {project.role}</p>
                        <p>Achievements: {project.achievement}</p>
                        <p>LinkedIn: {project.linkedin}</p>
                        <p>Github: {project.github}</p>
                        <p>Blog: {project.blog}</p>
                        <p>Hackerrank/Codechef/Leetcode: {project.codelink}</p>
                        {project.other && <p>Other: {project.other}</p>}
                        <hr />
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default Progress;
