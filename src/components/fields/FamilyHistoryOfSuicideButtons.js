import { useEffect, useState } from "react";

export const FamilyHistoryOfSuicideButtons = ({
  setFamilyHistoryOfSuicideNotes,
}) => {
  const [familyHistoryOfSuicide, setFamilyHistoryOfSuicide] = useState();

  const handleFamilySuicideBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setFamilyHistoryOfSuicide(boolState);
  };

  useEffect(() => {
    if (typeof familyHistoryOfSuicide === "undefined") {
      // on render, state will be undefined
      setFamilyHistoryOfSuicideNotes("");
    } else if (!familyHistoryOfSuicide) {
      setFamilyHistoryOfSuicideNotes("Denies any family history of suicide.");
    } else {
      // reset to blank string, in case user selects 'No' then 'Yes'
      setFamilyHistoryOfSuicideNotes("");
    }
  }, [familyHistoryOfSuicide, setFamilyHistoryOfSuicideNotes]);

  return (
    <div className="form-group">
      <label htmlFor="family-history-of-suicide">
        Family history of suicide:
      </label>

      <input
        type="radio"
        value={true}
        id="family-suicide-yes"
        onChange={handleFamilySuicideBool}
        name="family-history-of-suicide"
      />
      <label htmlFor="family-suicide-yes">Yes</label>

      <input
        type="radio"
        value={false}
        id="family-suicide-no"
        onChange={handleFamilySuicideBool}
        name="family-history-of-suicide"
      />
      <label htmlFor="family-suicide-no">No</label>

      {familyHistoryOfSuicide ? (
        <div className="form-group notes-field">
          <label htmlFor="family-history-of-suicide__notes">Notes:</label>
          <input
            type="text"
            id="family-history-of-suicide__notes"
            onChange={(evt) => {
              setFamilyHistoryOfSuicideNotes(evt.target.value);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
