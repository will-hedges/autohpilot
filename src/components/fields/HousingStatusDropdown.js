import { useEffect, useState } from "react";

const API = "http://localhost:8088";

export const HousingStatusDropdown = ({ setHousingStatus }) => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetch(`${API}/housingStatuses`)
      .then((res) => res.json())
      .then((statusArray) => {
        setStatuses(statusArray);
      });
  }, []);

  return (
    <div className="form-group">
      <label htmlFor="housing-status">Housing Status:</label>
      <select
        name="housing-status"
        onChange={(evt) => setHousingStatus(parseInt(evt.target.value))}
      >
        <option value="" className="form-option">
          Select a housing status
        </option>
        {statuses.map((status) => {
          return (
            <option key={status.id} value={status.id} className="form-option">
              {status.status}
            </option>
          );
        })}
      </select>
    </div>
  );
};
