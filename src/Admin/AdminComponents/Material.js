import React, { useState } from "react";
import "./Material.css";
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';

export const Material = ({ onDataUpdate }) => {
  const [materialData, setMaterialData] = useState({});
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMaterialData({ ...materialData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      // You might want to do something with the file, like upload it.
    } else {
      setUploadedFileName("");
    }
  };

  const handleSave = () => {
    // Send materialData to parent component
    onDataUpdate(materialData);
  };

  return (
    <div>
      <h2>Material Information</h2>
      <form>
        <input
          type="text"
          className="Title-Box"
          placeholder="Title"
        />
        <input
          type="text"
          className="Subject-Box"
          placeholder="Subject Or Domain"
        />
        <br/>
        <input
          type="Description"
          className="Description-Box"
          placeholder="Description"
          name="description"
        />
        <br/>
        <div className="Upload-Box">
        <div className="box">
          <h3 className="Text-box">Upload your files</h3>
          <div>
            <label htmlFor="file-upload" className="custom-file-upload">
              Browse files
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none'}}
            />
          </div>
          
        </div>
        <div className="uploaded-file-box">
        <div>
          {uploadedFileName ? uploadedFileName : "No file uploaded" }
        </div>  
          <DocumentScannerOutlinedIcon className= "Document" />
           <button type="button" onClick={handleSave} className="Post-Button">
          Post
        </button>
          </div>
        
        </div>
        
        
       
      </form>
    </div>
  );
};
