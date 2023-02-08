import { useEffect, useState } from "react";

const API = "http://localhost:8088";

export const VisitLocationDropdown = ({ setVisitLocationId }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`${API}/visitLocations`)
      .then((res) => res.json())
      .then((locationArray) => {
        setLocations(locationArray);
      });
  }, []);

  return (
    <div className="form-group">
      <label htmlFor="location">Visit Location:</label>
      <select
        name="location"
        onChange={(evt) => setVisitLocationId(parseInt(evt.target.value))}
      >
        <option value={0} className="form-option">
          Select a location
        </option>
        {locations.map((loc) => {
          return (
            <option key={loc.id} value={loc.id} className="form-option">
              {loc.location}
            </option>
          );
        })}
      </select>
    </div>
  );
};
