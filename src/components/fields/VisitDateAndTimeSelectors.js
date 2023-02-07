export const VisitDateAndTimeSelectors = ({ setVisitDate, setVisitTime }) => {
  return (
    <div className="form-group">
      <label htmlFor="visitDate">Visit Date:</label>
      <input
        type="date"
        name="visitDate"
        onChange={(evt) => {
          setVisitDate(evt.target.value);
        }}
      />

      <label htmlFor="visitTime">Visit Time:</label>
      <input
        type="time"
        name="visitTime"
        onChange={(evt) => {
          setVisitTime(evt.target.value);
        }}
      />
    </div>
  );
};
