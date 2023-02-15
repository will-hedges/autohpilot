export const ReligiousButtons = ({ setReligious }) => {
  const handleReligiousBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setReligious(boolState);
  };

  return (
    <div className="form-group">
      <form>
        <label htmlFor="religious" className="field__label">
          Religious/spiritual beliefs:
        </label>

        <input
          type="radio"
          value={true}
          id="religious-yes"
          onChange={handleReligiousBool}
          name="religious"
        />
        <label htmlFor="religious-yes" className="radio__label">
          Yes
        </label>

        <input
          type="radio"
          value={false}
          id="religious-no"
          onChange={handleReligiousBool}
          name="religious"
        />
        <label htmlFor="religious-no" className="radio__label">
          No
        </label>
      </form>
    </div>
  );
};
