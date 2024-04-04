import React, { useState } from "react";

export const Placement = ({ onDataUpdate }) => {
  const [placementData, setPlacementData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlacementData({ ...placementData, [name]: value });
  };

  const handleSave = () => {
    // Send placementData to parent component
    onDataUpdate(placementData);
  };

  return (
    <div>
      <h2>Placement Information</h2>
      <form>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={placementData.company || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={placementData.role || ""}
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
