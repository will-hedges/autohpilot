import { useEffect, useState } from "react";

const API = "http://localhost:8088";

const LastUseTextBox = ({
  substanceId,
  checkedSubstances,
  setCheckedSubstances,
}) => {
  return (
    <div className="form-group notes-field last-use">
      <label htmlFor={`substance-${substanceId}-last-use`}>Last Use:</label>
      <input
        type="text"
        id={`substance-${substanceId}-last-use`}
        onChange={(evt) => {
          const copy = { ...checkedSubstances };
          copy[substanceId] = evt.target.value;
          setCheckedSubstances(copy);
        }}
      />
    </div>
  );
};

export const SubstanceCheckboxes = ({
  checkedSubstances,
  setCheckedSubstances,
}) => {
  const [substances, setSubstances] = useState([]);

  const handleCheckboxChange = (evt) => {
    const substance = evt.target;
    const substanceId = evt.target.value;
    const copy = { ...checkedSubstances };

    if (substance.checked) {
      copy[substanceId] = "";
      setCheckedSubstances(copy);
    } else {
      delete copy[substanceId];
      setCheckedSubstances(copy);
    }
  };

  useEffect(() => {
    fetch(`${API}/substances`)
      .then((res) => res.json())
      .then((substancesArray) => {
        setSubstances(substancesArray);
      });
  }, []);

  return (
    <div className="form-group">
      <label htmlFor="substance-checkboxes" className="field__label">
        Substance Abuse History:
      </label>
      {substances.map((substance) => {
        return (
          <div key={substance.id} className="multi-checkbox">
            <input
              type="checkbox"
              key={substance.id}
              value={substance.id}
              name={substance.name}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={substance.name}>{substance.name}</label>
            {checkedSubstances.hasOwnProperty(substance.id) ? (
              <LastUseTextBox
                substanceId={substance.id}
                checkedSubstances={checkedSubstances}
                setCheckedSubstances={setCheckedSubstances}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};
