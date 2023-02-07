import { useEffect, useState } from "react";

export const TraumaHistoryButtons = ({ traumaHistoryNotesSetter }) => {
  const [trauma, setTrauma] = useState();

  const handleTraumaBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setTrauma(boolState);
  };

  useEffect(() => {
    // on render, state will be undefined
    if (typeof trauma === "undefined") {
      traumaHistoryNotesSetter("");
    } else if (!trauma) {
      traumaHistoryNotesSetter(
        "Denies any hx of physical, sexual, and/or emotional/psychological abuse."
      );
    } else {
      // reset state to blank string, in case the use selects 'no' then 'yes'
      traumaHistoryNotesSetter("");
    }
  }, [trauma, traumaHistoryNotesSetter]);

  return (
    <div className="form-group">
      <label htmlFor="trauma">History of trauma:</label>

      <input
        type="radio"
        value={true}
        id="traumaYes"
        onChange={handleTraumaBool}
        name="trauma"
      />
      <label htmlFor="traumaYes">Yes</label>

      <input
        type="radio"
        value={false}
        id="traumaNo"
        onChange={handleTraumaBool}
        name="trauma"
      />
      <label htmlFor="traumaNo">No</label>

      {trauma ? (
        <div className="form-group notes-field">
          <label htmlFor="traumaNotes">Notes:</label>
          <input
            type="text"
            id="traumaNotes"
            onChange={(evt) => {
              traumaHistoryNotesSetter(evt.target.value);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
