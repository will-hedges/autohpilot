import { useEffect, useState } from "react";

export const FamilySuicide = () => {
  const [familySuicide, setFamilySuicide] = useState();
  const [familySuicideNotes, setFamilySuicideNotes] = useState("");

  const handleFamilySuicideBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setFamilySuicide(boolState);
  };

  useEffect(() => {
    if (typeof familySuicide === "undefined") {
      setFamilySuicideNotes("");
    } else if (!familySuicide) {
      setFamilySuicideNotes("Denies any family history of suicide.");
    }
  }, [familySuicide]);

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
            value={familySuicideNotes}
            id="familySuicideNotes"
            onChange={(evt) => {
              setFamilySuicideNotes(evt.target.value);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
