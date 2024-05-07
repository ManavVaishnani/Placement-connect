import React, { useState } from "react";

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

    return (
        <div className="mt-2 ml-10 flex">
            <div className="mr-10">
                <div className="mb-5">
                    <label htmlFor="pname" className="text-lg">Project Name: </label>
                    <input type="text" id="pname" name="pname" required className="border-b border-purple-600 text-base px-2 py-1" /><br />
                    <label htmlFor="tech" className="text-lg">Technology: </label>
                    <input type="text" name="tech" id="tech" required className="border-b border-purple-600 text-base px-2 py-1" /> <br />
                    <label htmlFor="pdesc" className="text-lg">Project Description: </label>
                    <input type="text" name="pdesc" id="desc" required className="border-b border-purple-600 text-base px-2 py-1" /> <br />
                    <label htmlFor="role" className="text-lg">Your role in this project: </label>
                    <input type="text" name="role" id="role" required className="border-b border-purple-600 text-base px-2 py-1" /> <br />
                </div>
                <label htmlFor="achievement" className="text-lg">Achievements: </label>
                <input type="text" name="achievement" id="achievement" required className="border-b border-purple-600 text-base px-2 py-1" /> <br />
                <label htmlFor="linkedin" className="text-lg">Linkedin Link: </label>
                <input type="url" name="linkedin" id="linedin" required className="border-b border-purple-600 text-base px-2 py-1" /> <br />
                <label htmlFor="gihtub" className="text-lg">Github Link: </label>
                <input type="url" name="github" id="github" required className="border-b border-purple-600 text-base px-2 py-1" /> <br />
                <label htmlFor="blog" className="text-lg">Blog link: </label>
                <input type="url" name="blog" id="blog" required className="border-b border-purple-600 text-base px-2 py-1" /> <br />
                <label htmlFor="codelink" className="text-lg">Hakerrank/codechef/leetcode: </label>
                <input type="url" name="codelink" id="codelink" required className="border-b border-purple-600 text-base px-2 py-1" /> <br />
                <label htmlFor="other" className="text-lg">Other: </label>
                <input type="url" name="other" id="other" className="border-b border-purple-600 text-base px-2 py-1" /> <br />
            </div>
            <div className="flex-grow flex justify-end items-end mr-14">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg" onClick={handleAddProject}>Save</button>
            </div>
        </div>
    );
}

export default Progress;
