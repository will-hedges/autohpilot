export const ModifyingFactorsTextBoxes = ({
  setAggravatingFactors,
  setAlleviatingFactors,
}) => {
  return (
    // TODO could probably DRY this up
    <>
      <div className="form-group">
        <label htmlFor="aggravatingFactors">Aggravating Factors:</label>
        <textarea
          type="text"
          name="aggravatingFactors"
          onChange={(evt) => {
            setAggravatingFactors(evt.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="alleviatingFactors">Alleviating Factors:</label>
        <textarea
          type="text"
          name="alleviatingFactors"
          onChange={(evt) => {
            setAlleviatingFactors(evt.target.value);
          }}
        />
      </div>
    </>
  );
};
