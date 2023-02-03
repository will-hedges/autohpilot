import { useState } from "react";

export const LegalIssues = () => {
  const [legalIssues, setLegalIssues] = useState("");

  return (
    <div className="form-group">
      <label htmlFor="legalIssues">Legal Issues:</label>
      <textarea
        type="text"
        name="legalIssues"
        value={legalIssues}
        onChange={(evt) => {
          setLegalIssues(evt.target.value);
        }}
      />
    </div>
  );
};
