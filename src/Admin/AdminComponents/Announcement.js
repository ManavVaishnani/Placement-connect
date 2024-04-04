import React, { useState } from "react";

export const Announcement = ({ onDataUpdate }) => {
  const [announcementData, setAnnouncementData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnnouncementData({ ...announcementData, [name]: value });
  };

  const handleSave = () => {
    // Send announcementData to parent component
    onDataUpdate(announcementData);
  };

  return (
    <div>
      <h2>Announcement Information</h2>
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={announcementData.title || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={announcementData.description || ""}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};
