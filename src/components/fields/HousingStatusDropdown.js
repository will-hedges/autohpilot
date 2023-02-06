import { useEffect, useState } from "react";

const API = "http://localhost:8088";

export const HousingStatusDropdown = () => {
  const [statuses, setStatuses] = useState([]);
  const [chosenStatus, setChosenStatus] = useState("");

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
        value={chosenStatus}
        onChange={(evt) => setChosenStatus(parseInt(evt.target.value))}
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
