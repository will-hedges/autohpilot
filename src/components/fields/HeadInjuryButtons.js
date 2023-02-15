import { useEffect, useState } from "react";

export const HeadInjuryButtons = ({ setHeadInjuryNotes }) => {
  const [headInjury, setHeadInjury] = useState();

  const handleHeadInjuryBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setHeadInjury(boolState);
  };

  useEffect(() => {
    if (typeof headInjury === "undefined") {
      // on render, state will be undefined
      setHeadInjuryNotes("");
    } else if (!headInjury) {
      setHeadInjuryNotes(
        "Denies any history of seizures, serious head injuries/TBIs."
      );
    } else {
      // reset to blank string, in case user selects 'No' then 'Yes'
      setHeadInjuryNotes("");
    }
  }, [headInjury, setHeadInjuryNotes]);

  return (
    <div className="form-group">
      <label htmlFor="head-injury" className="field__label">
        History of head injury:
      </label>

      <input
        type="radio"
        value={true}
        id="head-injury-yes"
        onChange={handleHeadInjuryBool}
        name="head-injury"
      />
      <label htmlFor="head-injury-yes" className="radio__label">
        Yes
      </label>

      <input
        type="radio"
        value={false}
        id="head-injury-no"
        onChange={handleHeadInjuryBool}
        name="head-injury"
      />
      <label htmlFor="head-injury-no" className="radio__label">
        No
      </label>

      {headInjury ? (
        <div className="form-group notes-field">
          <label htmlFor="head-injury-notes">Notes:</label>
          <input
            type="text"
            id="head-injury-notes"
            onChange={(evt) => {
              setHeadInjuryNotes(evt.target.value);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
