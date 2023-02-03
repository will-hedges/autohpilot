import { useEffect, useState } from "react";

export const ChildhoodTrauma = () => {
  const [childhoodTrauma, setChildhoodTrauma] = useState();
  const [childhoodTraumaNotes, setChildhoodTraumaNotes] = useState("");

  const handleChildhoodTraumaBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setChildhoodTrauma(boolState);
  };

  useEffect(() => {
    if (!childhoodTrauma) {
      setChildhoodTraumaNotes("");
    }
  }, [childhoodTrauma]);

  return (
    <div className="form-group">
      <label htmlFor="childhoodTrauma">History of childhood trauma:</label>

      <input
        type="radio"
        value={true}
        id="childhoodTraumaYes"
        onChange={handleChildhoodTraumaBool}
        name="childhoodTrauma"
      />
      <label htmlFor="childhoodTraumaYes">Yes</label>

      <input
        type="radio"
        value={false}
        id="childhoodTraumaNo"
        onChange={handleChildhoodTraumaBool}
        name="childhoodTrauma"
      />
      <label htmlFor="childhoodTraumaNo">No</label>

      {childhoodTrauma ? (
        <div className="form-group notes-field">
          <label htmlFor="childhoodTraumaNotes">Notes:</label>
          <input
            type="text"
            value={childhoodTraumaNotes}
            id="childhoodTraumaNotes"
            onChange={(evt) => {
              setChildhoodTraumaNotes(evt.target.value);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
