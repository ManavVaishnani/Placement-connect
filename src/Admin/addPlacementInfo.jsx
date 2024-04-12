import React from 'react';
import { Link } from "react-router-dom";

const buttonClass = "px-4 py-2 text-sm font-semibold rounded-lg border focus:outline-none";
const inputClass = "border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-purple-300";

const UploadSection = () => {
    return (
        <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 mb-4 relative">
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <i className="fas fa-cloud-upload-alt text-purple-300 text-6xl"></i>
                    <span className="block text-zinc-400 font-normal">Drag your file(s) to start uploading</span>
                    {/* <button className="mt-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg">Browse files</button> */}
                    <input type="file" className="mt-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg" multiple/>
                </div>
            </div>
        </div>
    );
};

const FormComponent = () => {
    return (
        <div className="max-w-4xl m-20 mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex space-x-4 mb-4">
                <Link to="/addplacement">
                    <button className={`${buttonClass} text-white-600 border-purple-200 hover:bg-purple-100`}>Placement</button>
                </Link>
                <Link to="/addan">
                    <button className={`${buttonClass} text-white-600 border-zinc-200 hover:bg-zinc-100`}>Announcement</button>
                </Link>
                <Link to="/addma">
                    <button className={`${buttonClass} text-white-600 border-zinc-200 hover:bg-zinc-100`}>Material</button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Title" className={inputClass}/>
                <input type="text" placeholder="Date" className={inputClass}/>
            </div>
            <input type="text" placeholder="Description" className={inputClass + " mb-4"}/>
            <input type="text" placeholder="Registration link" className={inputClass + " mb-4"}/>
            <UploadSection />
            <div className="flex justify-end">
                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg">Post</button>
            </div>
        </div>
    );
};

const ReactComponent = () => {
    return <FormComponent />;
};

export default ReactComponent;