export const ChiefComplaintTextBox = ({ setChiefComplaint }) => {
  return (
    <div className="form-group">
      <label htmlFor="chief-complaint" className="field__label">
        Chief Complaint:
      </label>
      <input
        type="text"
        className="form-group__input"
        name="chief-complaint"
        onChange={(evt) => {
          setChiefComplaint(evt.target.value);
        }}
      />
    </div>
  );
};
