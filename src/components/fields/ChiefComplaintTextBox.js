export const ChiefComplaintTextBox = ({ chiefComplaintSetter }) => {
  return (
    <div className="form-group">
      <label htmlFor="chiefComplaint">Chief Complaint:</label>
      <input
        type="text"
        name="chiefComplaint"
        onChange={(evt) => {
          chiefComplaintSetter(evt.target.value);
        }}
      />
    </div>
  );
};
