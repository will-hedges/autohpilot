import { useState } from "react";

export const VisitTypeButtons = () => {
  const [visitType, setVisitType] = useState("");

  const handleVisitTypeChange = (evt) => {
    setVisitType(evt.target.value);
  };

  return (
    <div className="form-group">
      <form>
        <label htmlFor="visitType">Visit type:</label>

        <input
          type="radio"
          value="initial-visit"
          id="initial-visit"
          onChange={handleVisitTypeChange}
          name="visitType"
        />
        <label htmlFor="initial-visit">Initial visit</label>

        <input
          type="radio"
          value="follow-up"
          id="follow-up"
          onChange={handleVisitTypeChange}
          name="visitType"
        />
        <label htmlFor="follow-up">Follow-up</label>
      </form>
    </div>
  );
};
