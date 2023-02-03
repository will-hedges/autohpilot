import { useState } from "react";

export const PatientAge = () => {
  const [patientAge, setPatientAge] = useState();
  return (
    <div className="form-group">
      <label htmlFor="patientAge">Patient Age:</label>
      <input
        type="number"
        name="patientAge"
        value={patientAge}
        onChange={(evt) => {
          setPatientAge(parseInt(evt.target.value));
        }}
      />
      years
    </div>
  );
};
