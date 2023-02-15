import { useEffect, useState } from "react";

export const TraumaHistoryButtons = ({ setTraumaHistoryNotes }) => {
  const [trauma, setTrauma] = useState();

  const handleTraumaBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setTrauma(boolState);
  };

  useEffect(() => {
    // on render, state will be undefined
    if (typeof trauma === "undefined") {
      setTraumaHistoryNotes("");
    } else if (!trauma) {
      setTraumaHistoryNotes(
        "Denies any hx of physical, sexual, and/or emotional/psychological abuse."
      );
    } else {
      // reset state to blank string, in case the use selects 'no' then 'yes'
      setTraumaHistoryNotes("");
    }
  }, [trauma, setTraumaHistoryNotes]);

  return (
    <div className="form-group">
      <label htmlFor="trauma" className="field__label">
        History of trauma:
      </label>

      <input
        type="radio"
        value={true}
        id="trauma-yes"
        onChange={handleTraumaBool}
        name="trauma"
      />
      <label htmlFor="trauma-yes" className="radio__label">
        Yes
      </label>

      <input
        type="radio"
        value={false}
        id="trauma-no"
        onChange={handleTraumaBool}
        name="trauma"
      />
      <label htmlFor="trauma-no" className="radio__label">
        No
      </label>

      {trauma ? (
        <div className="form-group notes-field">
          <label htmlFor="traumaNotes">Notes:</label>
          <input
            type="text"
            id="traumaNotes"
            onChange={(evt) => {
              setTraumaHistoryNotes(evt.target.value);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
