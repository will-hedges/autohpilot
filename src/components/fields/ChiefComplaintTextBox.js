import { useState } from "react";

export const ChiefComplaintTextBox = () => {
  const [chiefComplaint, setChiefComplaint] = useState("");

  return (
    <div className="form-group">
      <label htmlFor="chiefComplaint">Chief Complaint:</label>
      <input
        type="text"
        name="chiefComplaint"
        value={chiefComplaint}
        onChange={(evt) => {
          setChiefComplaint(evt.target.value);
        }}
      />
    </div>
  );
};
