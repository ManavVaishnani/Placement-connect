import React from "react";
import { Link } from "react-router-dom";

const INPUT_CLASS =
  "px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500";
const BUTTON_CLASS = "px-4 py-2 text-sm font-medium";
const TEXTAREA_CLASS =
  "w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500";
const LABEL_CLASS =
  "flex flex-col rounded-lg border-4 border-dashed w-full h-32 p-4 group text-center";

const UploadSection = () => {
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

const MyForm = () => {
  return (
    <div className="flex flex-col items-center justify-center m-20">
      <div className="flex flex-col w-11/12 border-2 border border-purple-200 rounded-lg p-4">
        <div className="flex space-x-2 mb-4">
          <Link to="/addplacement">
            <button className={`${BUTTON_CLASS} text-white-600 border-zinc-200 hover:bg-zinc-100`}>
              Placement
            </button>
          </Link>
          <Link to="/addan">
            <button
              className={`${BUTTON_CLASS} text-white-600 border-zinc-200 hover:bg-zinc-100`}
            >
              Announcement
            </button>
          </Link>
          <Link to="/addma">
            <button
              className={`${BUTTON_CLASS} text-white-600 border-zinc-200 hover:bg-zinc-100`}
            >
              Material
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Title" className={INPUT_CLASS} />
          <input
            type="text"
            placeholder="Subject or domain"
            className={INPUT_CLASS}
          />
        </div>
        <textarea
          placeholder="Description"
          className={TEXTAREA_CLASS}
        ></textarea>
        {/* <div className="flex items-center justify-center w-full">
        <label className={LABEL_CLASS}>
          <div className="h-full w-full text-center flex flex-col items-center justify-center">
            <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h10M9 16h6M9 20h6"></path>
            </svg>
            <p className="text-sm text-zinc-500 dark:text-zinc-300">Drag your file(s) to start uploading</p>
          </div>
          <input type="file" className="hidden" />
        </label>
      </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
          <UploadSection />
          <button className=" bg-purple-600 text-white rounded-lg  w-20 h-[35px] mt-[60px]">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyForm;