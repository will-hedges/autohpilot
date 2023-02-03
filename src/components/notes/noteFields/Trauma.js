import { useEffect, useState } from "react";

export const Trauma = () => {
  const [trauma, setTrauma] = useState();
  const [traumaNotes, setTraumaNotes] = useState("");

  const handleTraumaBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setTrauma(boolState);
  };

  useEffect(() => {
    if (!trauma) {
      setTraumaNotes("");
    }
  }, [trauma]);

  return (
    <div className="form-group">
      <label htmlFor="trauma">History of childhood trauma:</label>

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
            value={traumaNotes}
            id="traumaNotes"
            onChange={(evt) => {
              setTraumaNotes(evt.target.value);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
