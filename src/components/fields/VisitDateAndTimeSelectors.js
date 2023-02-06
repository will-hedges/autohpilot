export const VisitDateAndTimeSelectors = ({
  visitDateSetter,
  visitTimeSetter,
}) => {
  return (
    <div className="form-group">
      <label htmlFor="visitDate">Visit Date:</label>
      <input
        type="date"
        name="visitDate"
        onChange={(evt) => {
          visitDateSetter(evt.target.value);
        }}
      />

      <label htmlFor="visitTime">Visit Time:</label>
      <input
        type="time"
        name="visitTime"
        onChange={(evt) => {
          visitTimeSetter(evt.target.value);
        }}
      />
    </div>
  );
};
