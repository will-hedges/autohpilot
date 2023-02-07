export const ModifyingFactorsTextBoxes = ({
  aggravatingFactorsSetter,
  alleviatingFactorsSetter,
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
            aggravatingFactorsSetter(evt.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="alleviatingFactors">Alleviating Factors:</label>
        <textarea
          type="text"
          name="alleviatingFactors"
          onChange={(evt) => {
            alleviatingFactorsSetter(evt.target.value);
          }}
        />
      </div>
    </>
  );
};
