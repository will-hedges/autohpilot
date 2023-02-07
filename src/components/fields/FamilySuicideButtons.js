import { useEffect, useState } from "react";

export const FamilySuicideButtons = ({ familySuicideHistoryNotesSetter }) => {
  const [familySuicide, setFamilySuicide] = useState();

  const handleFamilySuicideBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setFamilySuicide(boolState);
  };

  useEffect(() => {
    if (typeof familySuicide === "undefined") {
      // on render, state will be undefined
      familySuicideHistoryNotesSetter("");
    } else if (!familySuicide) {
      familySuicideHistoryNotesSetter("Denies any family history of suicide.");
    } else {
      // reset to blank string, in case user selects 'No' then 'Yes'
      familySuicideHistoryNotesSetter("");
    }
  }, [familySuicide, familySuicideHistoryNotesSetter]);

  return (
    <div className="form-group">
      <label htmlFor="familySuicide">Family history of suicide:</label>

      <input
        type="radio"
        value={true}
        id="familySuicideYes"
        onChange={handleFamilySuicideBool}
        name="familySuicide"
      />
      <label htmlFor="familySuicideYes">Yes</label>

      <input
        type="radio"
        value={false}
        id="familySuicideNo"
        onChange={handleFamilySuicideBool}
        name="familySuicide"
      />
      <label htmlFor="familySuicideNo">No</label>

      {familySuicide ? (
        <div className="form-group notes-field">
          <label htmlFor="familySuicideNotes">Notes:</label>
          <input
            type="text"
            id="familySuicideNotes"
            onChange={(evt) => {
              familySuicideHistoryNotesSetter(evt.target.value);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
