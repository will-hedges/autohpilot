import { useState } from "react";

export const PatientGenderButtons = () => {
  const [patientGender, setPatientGender] = useState("");

  const handleGenderChange = (evt) => {
    setPatientGender(evt.target.value);
  };

  return (
    <form>
      <label htmlFor="patientGender">Patient Gender:</label>
      <input
        type="radio"
        value="male"
        id="male"
        onChange={handleGenderChange}
        name="gender"
      />
      <label htmlFor="male">Male</label>

      <input
        type="radio"
        value="female"
        id="female"
        onChange={handleGenderChange}
        name="gender"
      />
      <label htmlFor="female">Female</label>
    </form>
  );
};
