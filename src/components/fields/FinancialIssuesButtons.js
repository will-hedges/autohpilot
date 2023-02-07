import { useEffect, useState } from "react";

export const FinancialIssuesButtons = ({ financialIssuesNotesSetter }) => {
  const [financialIssues, setFinancialIssues] = useState();

  const handleFinancialIssuesBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setFinancialIssues(boolState);
  };

  // useEffect hook to clear out notes field if 'no' is later selected
  useEffect(() => {
    if (!financialIssues) {
      financialIssuesNotesSetter("");
    }
  }, [financialIssues, financialIssuesNotesSetter]);

  return (
    <div className="form-group">
      <label htmlFor="financialIssues">Financial issues:</label>

      <input
        type="radio"
        value={true}
        id="financialIssuesYes"
        onChange={handleFinancialIssuesBool}
        name="financialIssues"
      />
      <label htmlFor="financialIssuesYes">Yes</label>

      <input
        type="radio"
        value={false}
        id="financialIssuesNo"
        onChange={handleFinancialIssuesBool}
        name="financialIssues"
      />
      <label htmlFor="financialIssuesNo">No</label>

      {financialIssues ? (
        <div className="form-group notes-field">
          <label htmlFor="financialIssuesNotes">Notes:</label>
          <input
            type="text"
            id="financialIssuesNotes"
            onChange={(evt) => {
              financialIssuesNotesSetter(evt.target.value);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
