export const PatientAgeField = ({ setPatientAge }) => {
  return (
    <div className="form-group">
      <label htmlFor="patient-age" className="field__label">
        Patient Age:
      </label>
      <input
        type="number"
        name="patient-age"
        id="patient-age__field"
        onChange={(evt) => {
          setPatientAge(parseInt(evt.target.value));
        }}
      />
      years
    </div>
  );
};
