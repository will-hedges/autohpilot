export const PatientGenderButtons = ({ setPatientGender }) => {
  const handleGenderChange = (evt) => {
    setPatientGender(evt.target.value);
  };

  return (
    <form>
      <label htmlFor="patientGender">Patient Gender:</label>
      <input
        type="radio"
        value="M"
        id="male"
        onChange={handleGenderChange}
        name="gender"
      />
      <label htmlFor="male">Male</label>

      <input
        type="radio"
        value="F"
        id="female"
        onChange={handleGenderChange}
        name="gender"
      />
      <label htmlFor="female">Female</label>
    </form>
  );
};
