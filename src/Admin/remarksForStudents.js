import React, { useEffect, useState } from "react";
import './remarksForStudents.css';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CampaignIcon from '@mui/icons-material/Campaign';
import WorkIcon from '@mui/icons-material/Work';
import ProfilePopup from "./ProfilePopup";

const INPUT_CLASS =
  "px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500";
const BUTTON_CLASS = "px-4 py-2 text-sm font-medium";
const TEXTAREA_CLASS =
  "w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-purple-700 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <MenuIcon className="text-white mr-2 cursor-pointer" onClick={toggleSidebar} />
          <h1 className="text-white text-2xl font-bold">PlacementConnect</h1>
        </div>
      </div>
    </nav>
  );
};

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`bg-gray-200 w-64 h-screen p-4 ${isOpen ? 'block' : 'hidden'}`}>
      <ul>
        {isOpen && (
          <>
            <li className="mb-2">
              <Link to="/addan" className="text-purple-700 hover:text-purple-900 flex items-center">
                <CampaignIcon className="mr-2" />
                Announcement
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/addma" className="text-purple-700 hover:text-purple-900 flex items-center">
                <MenuBookIcon className="mr-2" />
                Add Material
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/addPlacement" className="text-purple-700 hover:text-purple-900 flex items-center">
                <WorkIcon className="mr-2" />
                Placement
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export const Remarks = () => {
    const [showProfilePopup, setShowProfilePopup] = useState(false);
    const [studentinfo,setStudentinfo] = useState([]);
    const [studentId,setstudentId] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

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
      <div>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} />
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
        </div>
      </div>
    );
} 

export default Remarks;
