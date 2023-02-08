import { useEffect, useState } from "react";

export const LegalIssuesButtons = ({ setLegalIssuesNotes }) => {
  const [legalIssues, setLegalIssues] = useState();

  const handleLegalIssuesBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setLegalIssues(boolState);
  };

  useEffect(() => {
    if (!legalIssues) {
      setLegalIssuesNotes("");
    }
  }, [legalIssues, setLegalIssuesNotes]);

  return (
    <div className="form-group">
      <label htmlFor="legalIssues">Legal issues:</label>

      <input
        type="radio"
        value={true}
        id="legalIssuesYes"
        onChange={handleLegalIssuesBool}
        name="legalIssues"
      />
      <label htmlFor="legalIssuesYes">Yes</label>

      <input
        type="radio"
        value={false}
        id="legalIssuesNo"
        onChange={handleLegalIssuesBool}
        name="legalIssues"
      />
      <label htmlFor="legalIssuesNo">No</label>

      {legalIssues ? (
        <div className="form-group notes-field">
          <label htmlFor="legalIssuesNotes">Notes:</label>
          <input
            type="text"
            id="legalIssuesNotes"
            onChange={(evt) => {
              setLegalIssuesNotes(evt.target.value);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
