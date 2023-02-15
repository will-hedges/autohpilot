export const ModifyingFactorsTextBoxes = ({
  setAggravatingFactors,
  setAlleviatingFactors,
}) => {
  return (
    // TODO could probably DRY this up
    <>
      <div className="form-group modifying-factors">
        <label htmlFor="aggravating-factors" className="field__label">
          Aggravating Factors:
        </label>
        <textarea
          type="text"
          name="aggravating-factors"
          onChange={(evt) => {
            setAggravatingFactors(evt.target.value);
          }}
        />
      </div>

      <div className="form-group modifying-factors">
        <label htmlFor="alleviating-factors" className="field__label">
          Alleviating Factors:
        </label>
        <textarea
          type="text"
          name="alleviating-factors"
          onChange={(evt) => {
            setAlleviatingFactors(evt.target.value);
          }}
        />
      </div>
    </>
  );
};
