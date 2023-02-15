export const OccupationTextBox = ({ setOccupation }) => {
  return (
    <div className="form-group">
      <label htmlFor="occupation" className="field__label">
        Occupation:
      </label>
      <input
        type="text"
        name="occupation"
        onChange={(evt) => {
          setOccupation(evt.target.value);
        }}
      />
    </div>
  );
};
