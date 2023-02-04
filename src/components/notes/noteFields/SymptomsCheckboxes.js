import { useEffect, useState } from "react";

const API = "http://localhost:8088";

export const SymptomsCheckboxes = () => {
  const [symptoms, setSymptoms] = useState([]);

  let checkedSymptoms = [];

  const handleCheckboxChange = (evt) => {
    const symptom = evt.target;
    const symptomId = evt.target.value;
    if (symptom.checked) {
      // add to checkedSymptoms
      checkedSymptoms.push(symptomId);
    } else {
      // remove from checkedSymptoms
      checkedSymptoms = checkedSymptoms.filter((val) => val !== symptomId);
    }
  };

  useEffect(() => {
    fetch(`${API}/symptoms`)
      .then((res) => res.json())
      .then((symptomsArray) => {
        setSymptoms(symptomsArray);
      });
  }, []);

  return (
    <div className="form-group">
      <label htmlFor="symptoms-checkboxes">Symptoms</label>
      {symptoms.map((symptom) => {
        return (
          <div>
            <input
              type="checkbox"
              className="symptom-checkbox"
              key={symptom.id}
              value={symptom.id}
              name={symptom.name}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={symptom.name} key={`symptom--${symptom.id}`}>
              {symptom.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};
