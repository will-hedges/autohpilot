import { useState } from "react";

export const ModifyingFactors = () => {
  const [aggravatingFactors, setAggravatingFactors] = useState("");
  const [alleviatingFactors, setAlleviatingFactors] = useState("");

  return (
    // TODO could probably DRY this up
    <>
      <div className="form-group">
        <label htmlFor="aggravatingFactors">Aggravating Factors:</label>
        <textarea
          type="text"
          name="aggravatingFactors"
          value={aggravatingFactors}
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
          value={alleviatingFactors}
          onChange={(evt) => {
            setAlleviatingFactors(evt.target.value);
          }}
        />
      </div>
    </>
  );
};
