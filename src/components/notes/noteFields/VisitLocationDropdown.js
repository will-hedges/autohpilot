import { useEffect, useState } from "react";

const API = "http://localhost:8088";

export const VisitLocationDropdown = () => {
  const [locations, setLocations] = useState([]);
  const [chosenLocation, setChosenLocation] = useState("");

  useEffect(() => {
    fetch(`${API}/locations`)
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
        value={chosenLocation}
        onChange={(evt) => setChosenLocation(parseInt(evt.target.value))}
      >
        <option value="" className="form-option">
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
