export const VisitTypeButtons = ({ visitTypeSetter }) => {
  const handleVisitTypeChange = (evt) => {
    visitTypeSetter(evt.target.value);
  };

  return (
    <div className="form-group">
      <form>
        <label htmlFor="visitType">Visit type:</label>

        <input
          type="radio"
          value="Initial Visit"
          id="initial-visit"
          onChange={handleVisitTypeChange}
          name="visitType"
        />
        <label htmlFor="initial-visit">Initial visit</label>

        <input
          type="radio"
          value="Follow-Up"
          id="follow-up"
          onChange={handleVisitTypeChange}
          name="visitType"
        />
        <label htmlFor="follow-up">Follow-up</label>
      </form>
    </div>
  );
};
