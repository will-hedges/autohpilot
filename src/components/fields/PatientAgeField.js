export const PatientAgeField = ({ setPatientAge }) => {
  return (
    <div className="form-group">
      <label htmlFor="patientAge">Patient Age:</label>
      <input
        type="number"
        name="patientAge"
        onChange={(evt) => {
          setPatientAge(parseInt(evt.target.value));
        }}
      />
      years
    </div>
  );
};
