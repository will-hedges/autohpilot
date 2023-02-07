import { useEffect, useState } from "react";

const API = "http://localhost:8088";

const CourseDropdown = ({ symptomId }) => {
  const courses = ["Fluctuating", "Episodic", "Chronic"];
  const [chosenCourse, setChosenCourse] = useState("");

  return (
    <>
      <select
        name={`symptom-${symptomId}-course`}
        value={chosenCourse}
        onChange={(evt) => {
          setChosenCourse(evt.target.value);
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
    const symptomId = parseInt(symptom.value);
    const copy = [...checkedSymptoms];

    if (symptom.checked) {
      copy.push(symptomId);
      setCheckedSymptoms(copy);
    } else {
      setCheckedSymptoms(copy.filter((s) => s !== symptomId));
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
            {checkedSymptoms.includes(parseInt(symptom.id)) ? (
              <CourseDropdown symptomId={symptom.id} />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};
