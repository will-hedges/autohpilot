export const OccupationTextBox = ({ occupationSetter }) => {
  return (
    <div className="form-group">
      <label htmlFor="occupation">Occupation:</label>
      <input
        type="text"
        name="occupation"
        onChange={(evt) => {
          occupationSetter(evt.target.value);
        }}
      />
    </div>
  );
};
