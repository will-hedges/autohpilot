import { useEffect, useState } from "react";

export const HeadInjuryDropdown = () => {
  const [headInjury, setHeadInjury] = useState();
  const [headInjuryNotes, setHeadInjuryNotes] = useState("");

  const handleHeadInjuryBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setHeadInjury(boolState);
  };

  useEffect(() => {
    if (typeof headInjury === "undefined") {
      setHeadInjuryNotes("");
    } else if (!headInjury) {
      setHeadInjuryNotes(
        "Denies any history of seizures, serious head injuries/TBIs."
      );
    }
  }, [headInjury]);

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
            value={headInjuryNotes}
            id="headInjuryNotes"
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
