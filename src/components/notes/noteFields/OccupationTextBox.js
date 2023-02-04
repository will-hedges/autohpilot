import { useState } from "react";

export const OccupationTextBox = () => {
  const [occupation, setOccupation] = useState("");
  return (
    <div className="form-group">
      <label htmlFor="occupation">Occupation:</label>
      <input
        type="text"
        name="occupation"
        value={occupation}
        onChange={(evt) => {
          setOccupation(evt.target.value);
        }}
      />
    </div>
  );
};
