import { useEffect, useState } from "react";

export const FinancialIssues = () => {
  const [financialIssues, setFinancialIssues] = useState();
  const [financialIssuesNotes, setFinancialIssuesNotes] = useState("");

  const handleFinancialIssuesBool = (evt) => {
    let boolState = evt.target.value === "true" ? true : false;
    setFinancialIssues(boolState);
  };

  useEffect(() => {
    if (!financialIssues) {
      setFinancialIssuesNotes("");
    }
  }, [financialIssues]);

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
            value={financialIssuesNotes}
            id="financialIssuesNotes"
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
