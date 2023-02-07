import { useEffect, useState } from "react";

export const HeadInjuryButtons = ({ headInjuryNotesSetter }) => {
  const [headInjury, setHeadInjury] = useState();

  const handleHeadInjuryBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setHeadInjury(boolState);
  };

  useEffect(() => {
    if (typeof headInjury === "undefined") {
      // on render, state will be undefined
      headInjuryNotesSetter("");
    } else if (!headInjury) {
      headInjuryNotesSetter(
        "Denies any history of seizures, serious head injuries/TBIs."
      );
    } else {
      // reset to blank string, in case user selects 'No' then 'Yes'
      headInjuryNotesSetter("");
    }
  }, [headInjury, headInjuryNotesSetter]);

  return (
    <div className="form-group">
      <label htmlFor="headInjury">History of head injury:</label>

      <input
        type="radio"
        value={true}
        id="headInjuryYes"
        onChange={handleHeadInjuryBool}
        name="headInjury"
      />
      <label htmlFor="headInjuryYes">Yes</label>

      <input
        type="radio"
        value={false}
        id="headInjuryNo"
        onChange={handleHeadInjuryBool}
        name="headInjury"
      />
      <label htmlFor="headInjuryNo">No</label>

      {headInjury ? (
        <div className="form-group notes-field">
          <label htmlFor="headInjuryNotes">Notes:</label>
          <input
            type="text"
            id="headInjuryNotes"
            onChange={(evt) => {
              headInjuryNotesSetter(evt.target.value);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
