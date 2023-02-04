import { useEffect, useState } from "react";

const API = "http://localhost:8088";

export const SymptomsCheckboxes = () => {
  const [symptoms, setSymptoms] = useState([]);

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
              class="symptom-checkbox"
              key={symptom.id}
              value={symptom.id}
              name={symptom.name}
            />
            <label htmlFor={symptom.name}>{symptom.name}</label>
          </div>
        );
      })}
    </div>
  );
};
