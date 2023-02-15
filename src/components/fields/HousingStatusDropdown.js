import { useEffect, useState } from "react";

const API = "http://localhost:8088";

export const HousingStatusDropdown = ({ setHousingStatusId }) => {
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
      <label htmlFor="housing-status" className="field__label">
        Housing Status:
      </label>
      <select
        name="housing-status"
        onChange={(evt) => setHousingStatusId(parseInt(evt.target.value))}
      >
        <option value={0} className="form-option">
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
