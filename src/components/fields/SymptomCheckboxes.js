import { useEffect, useState } from "react";

const API = "http://localhost:8088";

const CourseDropdown = ({ symptomId, checkedSymptoms, setCheckedSymptoms }) => {
  const courses = ["Fluctuating", "Episodic", "Chronic"];
  // const [symptomCourse, setSymptomCourse] = useState("");

  return (
    <>
      <select
        name={`symptom-${symptomId}-course`}
        onChange={(evt) => {
          const copy = { ...checkedSymptoms };
          copy[symptomId] = evt.target.value;
          setCheckedSymptoms(copy);
        }}
      >
        <option value="" className="form-option">
          Select a symptom course
        </option>
        {courses.map((course) => {
          return (
            <option key={course} value={course}>
              {course}
            </option>
          );
        })}
      </select>
    </>
  );
};

export const SymptomCheckboxes = ({ checkedSymptoms, setCheckedSymptoms }) => {
  const [symptoms, setSymptoms] = useState([]);

  const handleCheckboxChange = (evt) => {
    const symptom = evt.target;
    const symptomId = evt.target.value;
    const copy = { ...checkedSymptoms };

    if (symptom.checked) {
      copy[symptomId] = "";
      setCheckedSymptoms(copy);
    } else {
      delete copy[symptomId];
      setCheckedSymptoms(copy);
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
      <label htmlFor="symptom-checkboxes">Symptoms:</label>
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
            {checkedSymptoms.hasOwnProperty(symptom.id) ? (
              <CourseDropdown
                symptomId={symptom.id}
                checkedSymptoms={checkedSymptoms}
                setCheckedSymptoms={setCheckedSymptoms}
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
