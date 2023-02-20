export const VisitDateAndTimeSelectors = ({ setVisitDate, setVisitTime }) => {
  return (
    <div className="form-group">
      <label htmlFor="visit-date" className="field__label">
        Visit Date:
      </label>
      <input
        type="date"
        name="visit-date"
        onChange={(evt) => {
          setVisitDate(evt.target.value);
        }}
      />

      <label htmlFor="visit-time" className="field__label">
        Visit Time:
      </label>
      <input
        type="time"
        name="visit-time"
        onChange={(evt) => {
          setVisitTime(evt.target.value);
        }}
      />
    </div>
  );
};
