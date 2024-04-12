import React from "react";
import { Link } from "react-router-dom";
const buttonClass = "px-4 py-2 rounded-lg focus:outline-none";
const inputClass = "border-2 border-purple-300 rounded-lg p-2 w-full";
const textareaClass = "border-2 border-purple-300 rounded-lg p-2 w-full h-32";
const labelClass =
  "w-64 flex flex-col items-center px-4 py-6 bg-white text-purple-600 rounded-lg shadow-lg tracking-wide uppercase border border-purple-300 cursor-pointer hover:bg-purple-100";

const UploadSection = () => {
    function ann(){

    }
  return (
    <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 mb-4 relative">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <i className="fas fa-cloud-upload-alt text-purple-300 text-6xl"></i>
          <span className="block text-zinc-400 font-normal">
            Drag your file(s) to start uploading
          </span>
          {/* <button className="mt-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg">Browse files</button> */}
          <input
            type="file"
            className="mt-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg"
            multiple
          />
        </div>
      </div>
    </div>
  );
};

const Material = () => {
  return (
    <div className="max-w-4xl m-20 mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex space-x-2 mb-6">
        <Link to="/addplacement">
            < button
                className={`${buttonClass} text-white-600 border-zinc-200 hover:bg-zinc-100`}
            >
            Placement
            </button>
        </Link>
        <Link to="/addan">
        <button
            className={`${buttonClass} text-white-600 border-zinc-200 hover:bg-zinc-100`}
        >
            Announcement
        </button>
        </Link>
        <Link to="/addma">
            <button
            className={`${buttonClass} text-white-600 border-purple-200 hover:bg-purple-100`}
            >
            Material
            </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="Title" className={inputClass} />
        <input
          type="text"
          placeholder="Subject or domain"
          className={inputClass}
        />
      </div>
      <textarea placeholder="Description" className={textareaClass}></textarea>
      <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg float-right focus:outline-none">
        Post
      </button>
      {/* <div className="flex justify-center items-center w-full">
                <label className={labelClass}>
                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16.7,5.3l-2-2C14.5,3.1,14.3,3,14,3H4C3.4,3,3,3.4,3,4v12c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V6C17,5.7,16.9,5.5,16.7,5.3z M15,7v9H5V5h8v2H15z M8,6h4v2H8V6z"></path>
                    </svg>
                    <span className="mt-2 text-base leading-normal">Drag your files to start uploading</span>
                    <input type='file' className="hidden" />
                </label>
            </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <UploadSection />
      </div>
    </div>
  );
};

export default Material;