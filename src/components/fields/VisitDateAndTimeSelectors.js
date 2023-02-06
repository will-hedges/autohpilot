import { useState } from "react";

export const VisitDateAndTimeSelectors = () => {
  const [visitDate, setVisitDate] = useState();
  const [visitTime, setVisitTime] = useState();

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

      <label htmlFor="visitTime">Visit Time:</label>
      <input
        type="time"
        name="visitTime"
        value={visitTime}
        onChange={(evt) => {
          setVisitTime(evt.target.value);
        }}
      />
    </div>
  );
};
