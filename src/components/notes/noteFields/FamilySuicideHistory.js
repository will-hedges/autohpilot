import { useEffect, useState } from "react";

export const FamilySuicideHistory = () => {
  const [familySuicideHistory, setFamilySuicideHistory] = useState();
  const [familySuicideHistoryNotes, setFamilySuicideHistoryNotes] =
    useState("");

  const handleFamilySuicideBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setFamilySuicideHistory(boolState);
  };

  useEffect(() => {
    if (!familySuicideHistory) {
      setFamilySuicideHistoryNotes("");
    }
  }, [familySuicideHistory]);

  return (
    <div className="form-group">
      <label htmlFor="familySuicideHistory">Family history of suicide:</label>

      <input
        type="radio"
        value={true}
        id="familySuicideYes"
        onChange={handleFamilySuicideBool}
        name="familySuicideHistory"
      />
      <label htmlFor="familySuicideYes">Yes</label>

      <input
        type="radio"
        value={false}
        id="familySuicideNo"
        onChange={handleFamilySuicideBool}
        name="familySuicideHistory"
      />
      <label htmlFor="familySuicideNo">No</label>

      {familySuicideHistory ? (
        <div className="form-group notes-field">
          <label htmlFor="familySuicideHistoryNotes">Notes:</label>
          <input
            type="text"
            value={familySuicideHistoryNotes}
            id="familySuicideHistoryNotes"
            onChange={(evt) => {
              setFamilySuicideHistoryNotes(evt.target.value);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
