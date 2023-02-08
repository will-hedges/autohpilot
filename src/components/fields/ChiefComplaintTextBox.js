export const ChiefComplaintTextBox = ({ setChiefComplaint }) => {
  return (
    <div className="form-group">
      <label htmlFor="chiefComplaint">Chief Complaint:</label>
      <input
        type="text"
        name="chiefComplaint"
        onChange={(evt) => {
          setChiefComplaint(evt.target.value);
        }}
      />
    </div>
  );
};
