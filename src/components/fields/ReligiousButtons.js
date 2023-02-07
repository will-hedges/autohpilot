export const ReligiousButtons = ({ religiousSetter }) => {
  const handleReligiousBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    religiousSetter(boolState);
  };

  return (
    <div className="form-group">
      <form>
        <label htmlFor="religious">Religious/spiritual beliefs:</label>

        <input
          type="radio"
          value={true}
          id="religiousYes"
          onChange={handleReligiousBool}
          name="religious"
        />
        <label htmlFor="religiousYes">Yes</label>

        <input
          type="radio"
          value={false}
          id="religiousNo"
          onChange={handleReligiousBool}
          name="religious"
        />
        <label htmlFor="religiousNo">No</label>
      </form>
    </div>
  );
};
