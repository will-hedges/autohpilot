import { useEffect, useState } from "react";

export const FinancialIssuesButtons = ({ setFinancialIssuesNotes }) => {
  const [financialIssues, setFinancialIssues] = useState();

  const handleFinancialIssuesBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setFinancialIssues(boolState);
  };

  // useEffect hook to clear out notes field if 'no' is later selected
  useEffect(() => {
    if (!financialIssues) {
      setFinancialIssuesNotes("");
    }
  }, [financialIssues, setFinancialIssuesNotes]);

  return (
    <div className="form-group">
      <label htmlFor="financial-issues" className="field__label">
        Financial issues:
      </label>

      <input
        type="radio"
        value={true}
        id="financial-issues-yes"
        onChange={handleFinancialIssuesBool}
        name="financial-issues"
      />
      <label htmlFor="financial-issues-yes" className="radio__label">
        Yes
      </label>

      <input
        type="radio"
        value={false}
        id="financial-issues-no"
        onChange={handleFinancialIssuesBool}
        name="financial-issues"
      />
      <label htmlFor="financial-issues-no" className="radio__label">
        No
      </label>

      {financialIssues ? (
        <div className="form-group notes-field">
          <label htmlFor="financial-issues-notes">Notes:</label>
          <input
            type="text"
            id="financial-issues-notes"
            onChange={(evt) => {
              setFinancialIssuesNotes(evt.target.value);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
