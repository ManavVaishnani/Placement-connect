import React from "react";
import { useState } from "react";
export const Intrest = () => {
  const technologyOptions = [
    "HTML5",
    "C++",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "MongoDb",
    "Python",
    "Java",
    "Express.js",
    "Bootstrap",
    "Git",
    "FireBase",
    "PHP",
    "Flutter",
    "UX/UI Design Principles",
    "Docker",
    "API Development",
    "AWS (Amazon Web Services)",
    "Agile and Scrum Methodologies",
    "Project Management Tools",
    "Power BI",
    "Django",
    "Kubernetes",
    "Software Testing (Automation and Manual)",
    "TypeScript",
    "Google Cloud Platform (GCP)",
    "Kotlin",
    "CI/CD Pipelines",
    "Deep Learning",
    "other",
    "Angular",
    "Cryptography",
    "Natural Language Processing (NLP)",
    "React Native",
    "C#",
    "Tableau",
    "Dot net",
    "Flask",
    "Computer Vision",
    "Jenkins",
    "Network Security",
    "Blockchain",
    "Microsoft Azure",
    "Ethical Hacking",
    "Ansible",
    "AR and VR",
    "Internet of Things (IoT)",
    "Swift",
    "Go (Golang)",
    "Hadoop",
    "Quantum Computing",
    "RPA (Robotic Process Automation)",
    "Ruby",
  ];

  const jobProfileOptions = [
    "Web Developer",
    "Front-end Developer",
    "Software Developer/Engineer",
    "Back-end Developer",
    "Full-stack Developer",
    "UI/UX Designer",
    "Mobile Application",
    "DevOps Engineer",
    "Database Administrator (DBA)",
    "Project Manager",
    "Software Tester/QA Engineer",
    "Cloud Engineer",
    "Data Analyst",
    "Machine Learning Engineer",
    "Product Manager",
    "Data Scientist",
    "Business Analyst",
    "Artificial Intelligence Engineer",
    "Social Media Specialist",
    "E-commerce Specialist",
    "Digital Marketing Specialist",
    "Quality Assurance Analyst",
    "IT Consultant",
    "Cybersecurity Analyst",
    "Cloud Consultant",
    "Content Developer",
    "Software Architect",
    "Cloud Systems Administrator",
    "Game Developer",
    "Systems Analyst",
    "Technical Support Engineer",
    "Artificial Intelligence Specialist",
    "UX Researcher",
    "SEO Specialist",
    "Computer Vision Engineer",
    "Big Data Engineer/Analyst",
    "Network Administrator/Engineer",
    "AR,VR Developer",
    "Information Security Analyst",
    "Blockchain Developer",
    "IoT Developer",
    "Systems Engineer",
    "Network Security Engineer",
    "Data Governance Analyst",
    "Penetration Tester",
    "CRM Consultant",
    "ERP Consultant",
    "Blockchain Analyst",
    "Technical Sales Engineer",
    "Embedded Systems Engineer",
  ];
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedJobProfiles, setSelectedJobProfiles] = useState([]);

  const handleTechnologyChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedTechnologies(selectedOptions);
  };

  const handleJobProfileChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedJobProfiles(selectedOptions);
  };

  const handleInterestSubmit = () => {
    console.log("Submitted Technologies:", selectedTechnologies);
    console.log("Submitted Job Profiles:", selectedJobProfiles);
  };

  return (
    <div className="interest-container">
      <h3>Interest Page</h3>

      <div>
        <label>Choose Technologies:</label>
        <select
          multiple
          value={selectedTechnologies}
          onChange={handleTechnologyChange}
        >
          {technologyOptions.map((tech, index) => (
            <option key={index} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Choose Job Profiles:</label>
        <select
          multiple
          value={selectedJobProfiles}
          onChange={handleJobProfileChange}
        >
          {jobProfileOptions.map((profile, index) => (
            <option key={index} value={profile}>
              {profile}
            </option>
          ))}
        </select>
      </div>

      <button className="submitBtn" onClick={handleInterestSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Intrest;