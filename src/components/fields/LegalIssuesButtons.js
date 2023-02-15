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
      <label htmlFor="legal-issues" className="field__label">
        Legal issues:
      </label>

      <input
        type="radio"
        value={true}
        id="legal-issues-yes"
        onChange={handleLegalIssuesBool}
        name="legal-issues"
      />
      <label htmlFor="legal-issues-yes" className="radio__label">
        Yes
      </label>

      <input
        type="radio"
        value={false}
        id="legal-issues-no"
        onChange={handleLegalIssuesBool}
        name="legal-issues"
      />
      <label htmlFor="legal-issues-no" className="radio__label">
        No
      </label>

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
