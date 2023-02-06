import { useEffect, useState } from "react";

const API = "http://localhost:8088";

const symptomCourses = ["fluctuating", "episodic", "chronic"];

export const SymptomsCheckboxes = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [checkedSymptoms, setCheckedSymptoms] = useState([]);

  const handleCheckboxChange = (evt) => {
    const symptom = evt.target;
    const copy = [...checkedSymptoms];

    if (symptom.checked) {
      copy.push(parseInt(symptom.value));
      setCheckedSymptoms(copy);
    } else {
      setCheckedSymptoms(
        copy.filter((symptomId) => symptomId !== parseInt(symptom.value))
      );
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
          <div key={symptom.id}>
            <input
              type="checkbox"
              className="symptom-checkbox"
              key={symptom.id}
              value={symptom.id}
              name={symptom.name}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={symptom.name}>{symptom.name}</label>

            {/* display a 'course' dropdown if the box is checked */}
          </div>
        );
      })}
    </div>
  );
};
