import { useState } from "react";

export const VisitDate = () => {
  const [visitDate, setVisitDate] = useState("");
  return (
    <div className="form-group">
      <label htmlFor="visitDate">Visit Date:</label>
      <input
        type="date"
        name="visitDate"
        value={visitDate}
        onChange={(evt) => {
          setVisitDate(evt.target.value);
        }}
      />
    </div>
  );
};
