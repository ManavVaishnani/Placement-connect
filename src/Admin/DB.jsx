import { Upload } from '@mui/icons-material';
import React, { useState, useRef ,useEffect } from 'react';

const Dashboard = () => {
  const [initialJobPlacements,setInitialJobplacements] = useState([{}]);
  const fetch_placement_data = ()=>{
      fetch('http://localhost:5000/api/get_placement_data', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        
      // Effect to fetch personal data when the component mounts
      
  }
  useEffect(() => {
    fetch_placement_data();
  }, []);
  // const initialJobPlacements = [
  //   { 
  //     title: 'Job Title 1',
  //     date: 'May 1, 2024',
  //     domain: 'https://example.com',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //   },
  //   { 
  //     title: 'Job Title 2',
  //     date: 'May 2, 2024',
  //     domain: 'https://example.com',
  //     description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  //   },
  //   { 
  //     title: 'Job Title 3',
  //     date: 'May 3, 2024',
  //     domain: 'https://example.com',
  //     description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  //   },
  //   { 
  //     title: 'Job Title 4',
  //     date: 'May 4, 2024',
  //     domain: 'https://example.com',
  //     description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  //   },
  //   { 
  //     title: 'Job Title 5',
  //     date: 'May 5, 2024',
  //     domain: 'https://example.com',
  //     description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  //   },
  // ];
const initialMaterial = [
    { 
      title: 'Material Title 1',
      subject: 'xyz',
      Uploaded : 'xyz sir',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    { 
      title: 'Material Title 1',
      subject: 'xyz',
      Uploaded : 'xyz sir',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    { 
      title: 'Material Title 1',
      subject: 'xyz',
      Uploaded : 'xyz sir',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    { 
      title: 'Material Title 1',
      subject: 'xyz',
      Uploaded : 'xyz sir',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    { 
      title: 'Material Title 1',
      subject: 'xyz',
      Uploaded : 'xyz sir',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];

  const initialAnnouncements = [
    {
      title: 'Announcement Title 1',
      date: 'May 1, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'Announcement Title 2',
      date: 'May 2, 2024',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Announcement Title 3',
      date: 'May 3, 2024',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      title: 'Announcement Title 4',
      date: 'May 4, 2024',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Announcement Title 5',
      date: 'May 5, 2024',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
  ];
    
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showAllAnnouncements, setShowAllAnnouncements] = useState(false);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const popupRef = useRef(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [showAllMaterials, setShowAllMaterials] = useState(false);
  

const handleMaterialMoreClick = () => {
  setShowAllMaterials(true);
};

  const handleMoreClick = () => {
    setShowAllJobs(true);
  };
  

  const handleAnnouncementMoreClick = () => {
    setShowAllAnnouncements(true);
  };

  const handlePopupClose = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowAllJobs(false);
      setShowAllAnnouncements(false);
      setShowDetailsPopup(false);
      setShowAllMaterials(false);
    }
  };

  const handleDetailsClick = (job) => {
    setSelectedJob(job);
    setShowDetailsPopup(true);
  };

  const handleAnnouncementDetailsClick = (announcement) => {
    setSelectedAnnouncement(announcement);
    setShowDetailsPopup(true);
  };

const handleMaterialDetailsClick = (material) => {
  setSelectedMaterial(material);
  setShowDetailsPopup(true); 
};


  return (
    <div className="bg-gray-100 h-screen" onClick={handlePopupClose}>
      <header className="bg-blue-500 p-4 text-white text-xl font-bold flex justify-between items-center">
        <span>Placement</span>
        {initialJobPlacements.length > 3 && (
          <button className="bg-gray-700 text-white px-2 py-1 rounded text-sm" onClick={handleMoreClick}>
            More
          </button>
        )}
      </header>
      <main className="grid grid-cols-3 gap-4 p-4">
        <section className="bg-white p-4 shadow-md rounded-lg w-screen">
          <div className="text-xl font-semibold mb-4">Placement Section</div>
          <div className="bg-white p-4 shadow-md rounded-lg flex flex-col md:flex-row justify-between">
            {initialJobPlacements.slice(0, 3).map((job, index) => (
  <div key={index} className="border-b border-gray-200 pb-4 mb-4 md:w-1/2 md:pr-4">
    <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
    <p className="text-gray-600 mb-2">Date: {job.date}</p>
    <div className="flex items-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4" onClick={() => handleDetailsClick(job)}>Details</button>
      <button className="bg-black-500 text-white px-4 py-2 rounded">Download PDF</button>
    </div>
  </div>
))}

          </div>
        </section>
      </main>
      {showAllJobs && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div ref={popupRef} className="bg-white p-4 shadow-md rounded-lg overflow-auto" style={{ maxHeight: '80vh', width: '70%', maxWidth: '650px' }}>
            {initialJobPlacements.map((job, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-2">Date: {job.date}</p>
                <p className="text-gray-600 mb-2">Domain: <a href={job.domain} target="_blank" rel="noopener noreferrer">{job.domain}</a></p>
                <p className="text-gray-600 mb-2">Description: {job.description}</p>
                <div className="flex items-center">
                  <button className="bg-black-500 text-white px-4 py-2 rounded mr-4" onClick={() => handleDetailsClick(job)}>Details</button>
                  <button className="bg-black-500 text-white px-4 py-2 rounded">Download PDF</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {showDetailsPopup && selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div ref={popupRef} className="bg-white p-4 shadow-md rounded-lg overflow-auto" style={{ maxHeight: '80vh', width: '70%', maxWidth: '650px' }}>
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="text-lg font-semibold mb-2">{selectedJob.title}</h3>
              <p className="text-gray-600 mb-2">Date: {selectedJob.date}</p>
              <p className="text-gray-600 mb-2">Domain: <a href={selectedJob.domain} target="_blank" rel="noopener noreferrer">{selectedJob.domain}</a></p>
              <p className="text-gray-600 mb-2">Description: {selectedJob.description}</p>
              <div className="flex items-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Download PDF</button>
              </div>
            </div>
          </div>
        </div>
      )}
     <header className="bg-green-500 p-4 text-white text-xl font-bold flex justify-between items-center">
        <span>Announcement</span>
        {initialAnnouncements.length > 3 && (
          <button className="bg-gray-700 text-white px-2 py-1 rounded text-sm" onClick={handleAnnouncementMoreClick}>
            More
          </button>
        )}
      </header>
      <main className="p-4">
        <section className="bg-white p-4 shadow-md rounded-lg">
          <div className="text-xl font-semibold mb-4">Announcement Section</div>
          <div className="bg-white p-4 shadow-md rounded-lg flex flex-col md:flex-row justify-between">
            {initialAnnouncements.slice(0, 3).map((Announcement, index) => (
  <div key={index} className="border-b border-gray-200 pb-4 mb-4 md:w-1/2 md:pr-4">
    <h3 className="text-lg font-semibold mb-2">{Announcement.title}</h3>
    <p className="text-gray-600 mb-2">Date: {Announcement.date}</p>
    <div className="flex items-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4" onClick={() => handleAnnouncementDetailsClick(Announcement)}>Details</button>
      <button className="bg-black-500 text-white px-4 py-2 rounded">Download PDF</button>
    </div>
  </div>
))}
          </div>
        </section>
      </main>
      {showAllAnnouncements && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div ref={popupRef} className="bg-white p-4 shadow-md rounded-lg overflow-auto" style={{ maxHeight: '80vh', width: '70%', maxWidth: '650px' }}>
            {initialAnnouncements.map((announcement, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">{announcement.title}</h3>
                <p className="text-gray-600 mb-2">Date: {announcement.date}</p>
                <p className="text-gray-600 mb-2">Description: {announcement.description}</p>
                <div className="flex items-center">
                  <button className="bg-black-500 text-white px-4 py-2 rounded mr-4" onClick={() => handleAnnouncementDetailsClick(announcement)}>Details</button>
                  <button className="bg-purple-700 text-white px-4 py-2 rounded">Download PDF</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {showDetailsPopup && selectedAnnouncement && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div ref={popupRef} className="bg-white p-4 shadow-md rounded-lg overflow-auto" style={{ maxHeight: '80vh', width: '70%', maxWidth: '650px' }}>
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="text-lg font-semibold mb-2">{selectedAnnouncement.title}</h3>
              <p className="text-gray-600 mb-2">Date: {selectedAnnouncement.date}</p>
              <p className="text-gray-600 mb-2">Description: {selectedAnnouncement.description}</p>
            </div>
          </div>
        </div>
      )}
      <header className="bg-yellow-500 p-4 text-white text-xl font-bold flex justify-between items-center">
        <span>Material</span>
        {initialAnnouncements.length > 3 && (
          <button className="bg-gray-700 text-white px-2 py-1 rounded text-sm" onClick={handleMaterialMoreClick}>
            More
          </button>
        )}
      </header>
      <main className="p-4">
  <section className="bg-white p-4 shadow-md rounded-lg w-screen">
    <div className="text-xl font-semibold mb-4">Material Section</div>
    <div className="bg-white p-4 shadow-md rounded-lg flex flex-col md:flex-row justify-between">
      {initialMaterial.slice(0, 3).map((material, index) => (
  <div key={index} className="border-b border-gray-200 pb-4 mb-4 md:w-1/2 md:pr-4">
    <h3 className="text-lg font-semibold mb-2">{material.title}</h3>
    <p className="text-gray-600 mb-2">Subject: {material.subject}</p>
    <p className="text-gray-600 mb-2">Upload By: {material.Uploaded}</p>
    <div className="flex items-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4" onClick={() => handleMaterialDetailsClick(material)}>Details</button>
      <button className="bg-black-500 text-white px-4 py-2 rounded">Download PDF</button>
    </div>
  </div>
))}
    </div>
  </section>
</main>
{showDetailsPopup && selectedMaterial && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div ref={popupRef} className="bg-white p-4 shadow-md rounded-lg overflow-auto" style={{ maxHeight: '80vh', width: '70%', maxWidth: '650px' }}>
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">{selectedMaterial.title}</h3>
        <p className="text-gray-600 mb-2">Subject: {selectedMaterial.subject}</p>
        <p className="text-gray-600 mb-2">Uploaded By: {selectedMaterial.Uploaded}</p>
        <p className="text-gray-600 mb-2">Description: {selectedMaterial.Description}</p>
        {/* Add more details as needed */}
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Download PDF</button>
        </div>
      </div>
    </div>
  </div>
)}
{showAllMaterials && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div ref={popupRef} className="bg-white p-4 shadow-md rounded-lg overflow-auto" style={{ maxHeight: '80vh', width: '70%', maxWidth: '650px' }}>
            {initialMaterial.map((material, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">{material.title}</h3>
                <p className="text-gray-600 mb-2">subject: {material.subject}</p>
                <p className="text-gray-600 mb-2">Upload by: {material.Uploaded}</p>
                <p className="text-gray-600 mb-2">Description: {material.Description}</p>
                <div className="flex items-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Download PDF</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
