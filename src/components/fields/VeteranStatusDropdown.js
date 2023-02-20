import { useEffect, useState } from "react";

const API = "http://localhost:8088";

export const VeteranStatusDropdown = ({ setVeteranStatusId }) => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetch(`${API}/veteranStatuses`)
      .then((res) => res.json())
      .then((statusArray) => {
        setStatuses(statusArray);
      });
  }, []);

  return (
    <div className="form-group">
      <label htmlFor="veteran-status" className="field__label">
        Veteran Status:
      </label>
      <select
        name="veteran-status"
        onChange={(evt) => setVeteranStatusId(parseInt(evt.target.value))}
      >
        <option value={0} className="form-option">
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
