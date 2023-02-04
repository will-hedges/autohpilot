import { useEffect, useState } from "react";

const API = "http://localhost:8088";

export const EducationLevelDropdown = () => {
  const [levels, setLevels] = useState([]);
  const [educationLevel, setEducationLevel] = useState("");

  useEffect(() => {
    fetch(`${API}/educationLevels`)
      .then((res) => res.json())
      .then((levelArray) => {
        setLevels(levelArray);
      });
  }, []);

  return (
    <div className="form-group">
      <label htmlFor="education-level">
        Highest education level completed:
      </label>
      <select
        name="education-level"
        value={educationLevel}
        onChange={(evt) => setEducationLevel(parseInt(evt.target.value))}
      >
        <option value="" className="form-option">
          Select a level
        </option>
        {levels.map((level) => {
          return (
            <option key={level.id} value={level.id} className="form-option">
              {level.levelCompleted}
            </option>
          );
        })}
      </select>
    </div>
  );
};
