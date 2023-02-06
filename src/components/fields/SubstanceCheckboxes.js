import { useEffect, useState } from "react";

const API = "http://localhost:8088";

const LastUseTextBox = ({ substanceId }) => {
  const [lastUse, setLastUse] = useState("");

  return (
    <div className="form-group notes-field last-use">
      <label htmlFor={`substance-${substanceId}-last-use`}>Last Use:</label>
      <input
        type="text"
        value={lastUse}
        id={`substance-${substanceId}-last-use`}
        onChange={(evt) => {
          setLastUse(evt.target.value);
        }}
      />
    </div>
  );
};

export const SubstanceCheckboxes = () => {
  const [substances, setSubstances] = useState([]);
  const [checkedSubstances, setCheckedSubstances] = useState([]);

  const handleCheckboxChange = (evt) => {
    const substance = evt.target;
    const substanceId = parseInt(substance.value);
    const copy = [...checkedSubstances];

    if (substance.checked) {
      copy.push(substanceId);
      setCheckedSubstances(copy);
    } else {
      setCheckedSubstances(copy.filter((s) => s !== substanceId));
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
      <label htmlFor="substance-checkboxes">Substance Abuse History:</label>
      {substances.map((substance) => {
        return (
          <div key={substance.id}>
            <input
              type="checkbox"
              className="substance-checkbox"
              key={substance.id}
              value={substance.id}
              name={substance.name}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={substance.name}>{substance.name}</label>
            {checkedSubstances.includes(parseInt(substance.id)) ? (
              <LastUseTextBox substanceId={substance.id} />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};
