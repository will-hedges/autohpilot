import { useState } from "react";

export const PatientGender = () => {
  const [patientGender, setPatientGender] = useState("");

  const handleChange = (evt) => {
    setPatientGender(evt.target.value);
  };

  return (
    <form>
      <label htmlFor="patientGender">Patient Gender:</label>
      <input
        type="radio"
        value="male"
        id="male"
        onChange={handleChange}
        name="gender"
      />
      <label htmlFor="male">Male</label>

      <input
        type="radio"
        value="female"
        id="female"
        onChange={handleChange}
        name="gender"
      />
      <label htmlFor="female">Female</label>
    </form>
  );
};
