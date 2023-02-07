import { useEffect, useState } from "react";

const API = "http://localhost:8088";

export const MaritalStatusDropdown = ({ maritalStatusSetter }) => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetch(`${API}/maritalStatuses`)
      .then((res) => res.json())
      .then((statusArray) => {
        setStatuses(statusArray);
      });
  }, []);

  return (
    <div className="form-group">
      <label htmlFor="marital-status">Marital Status:</label>
      <select
        name="marital-status"
        onChange={(evt) => maritalStatusSetter(parseInt(evt.target.value))}
      >
        <option value="" className="form-option">
          Select a marital status
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
