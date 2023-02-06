export const PatientAgeField = ({ patientAgeSetter }) => {
  return (
    <div className="form-group">
      <label htmlFor="patientAge">Patient Age:</label>
      <input
        type="number"
        name="patientAge"
        onChange={(evt) => {
          patientAgeSetter(parseInt(evt.target.value));
        }}
      />
      years
    </div>
  );
};
