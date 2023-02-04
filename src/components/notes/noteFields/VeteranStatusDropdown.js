import { useEffect, useState } from "react";

const API = "http://localhost:8088";

export const VeteranStatusDropdown = () => {
  const [statuses, setStatuses] = useState([]);
  const [chosenStatus, setChosenStatus] = useState("");

  useEffect(() => {
    fetch(`${API}/veteranStatuses`)
      .then((res) => res.json())
      .then((statusArray) => {
        setStatuses(statusArray);
      });
  }, []);

  return (
    <div className="form-group">
      <label htmlFor="veteran-status">Veteran Status:</label>
      <select
        name="veteran-status"
        value={chosenStatus}
        onChange={(evt) => setChosenStatus(parseInt(evt.target.value))}
      >
        <option value="" className="form-option">
          Select a veteran status
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
