import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ChiefComplaintTextBox } from "../fields/ChiefComplaintTextBox";
import { EducationLevelDropdown } from "../fields/EducationLevelDropdown";
import { FamilyHistoryOfSuicideButtons } from "../fields/FamilyHistoryOfSuicideButtons";
import { FinancialIssuesButtons } from "../fields/FinancialIssuesButtons";
import { HeadInjuryButtons } from "../fields/HeadInjuryButtons";
import { HousingStatusDropdown } from "../fields/HousingStatusDropdown";
import { LegalIssuesButtons } from "../fields/LegalIssuesButtons";
import { MaritalStatusDropdown } from "../fields/MaritalStatusDropdown";
import { ModifyingFactorsTextBoxes } from "../fields/ModifyingFactorsTextBoxes";
import { OccupationTextBox } from "../fields/OccupationTextBox";
import { PatientAgeField } from "../fields/PatientAgeField";
import { PatientGenderButtons } from "../fields/PatientGenderButtons";
import { ReligiousButtons } from "../fields/ReligiousButtons";
import { SubstanceCheckboxes } from "../fields/SubstanceCheckboxes";
import { SymptomCheckboxes } from "../fields/SymptomCheckboxes";
import { TraumaHistoryButtons } from "../fields/TraumaHistoryButtons";
import { VeteranStatusDropdown } from "../fields/VeteranStatusDropdown";
import { VisitDateAndTimeSelectors } from "../fields/VisitDateAndTimeSelectors";
import { VisitLocationDropdown } from "../fields/VisitLocationDropdown";
import { VisitTypeButtons } from "../fields/VisitTypeButtons";

import "./NoteForm.css";

const API = "http://localhost:8088";

export const NoteForm = () => {
  const navigate = useNavigate();
  const localUserObj = JSON.parse(localStorage.getItem("autohpilot_user"));

  const [visitDate, setVisitDate] = useState(""); // default today?
  const [visitTime, setVisitTime] = useState(""); // default now?
  const [patientAge, setPatientAge] = useState(0);
  const [patientGender, setPatientGender] = useState("");
  const [visitTypeId, setVisitTypeId] = useState(0);
  const [visitLocationId, setVisitLocationId] = useState(0);
  const [chiefComplaint, setChiefComplaint] = useState("");
  const [checkedSymptoms, setCheckedSymptoms] = useState({});
  const [aggravatingFactors, setAggravatingFactors] = useState("");
  const [alleviatingFactors, setAlleviatingFactors] = useState("");
  const [maritalStatusId, setMaritalStatusId] = useState(0);
  const [educationLevelId, setEducationLevelId] = useState(0);
  const [occupation, setOccupation] = useState("");
  const [religious, setReligious] = useState(null);
  const [financialIssuesNotes, setFinancialIssuesNotes] = useState("");
  const [housingStatusId, setHousingStatusId] = useState(0);
  const [legalIssuesNotes, setLegalIssuesNotes] = useState("");
  const [veteranStatusId, setVeteranStatusId] = useState(0);
  const [headInjuryNotes, setHeadInjuryNotes] = useState("");
  const [checkedSubstances, setCheckedSubstances] = useState({});
  const [familyHistoryOfSuicideNotes, setFamilyHistoryOfSuicideNotes] =
    useState("");
  const [traumaHistoryNotes, setTraumaHistoryNotes] = useState("");

  const handleSubmitNoteButtonClick = () => {
    // add some logic here for required fields
    // or add 'required' attribute to those inputs
    // show a window alert or similar for req'd fields

    const noteObj = {
      userId: localUserObj.id,
      visitDate: visitDate,
      visitTime: visitTime,
      patientAge: patientAge,
      patientGender: patientGender,
      visitLocationId: visitLocationId,
      visitTypeId: visitTypeId,
      chiefComplaint: chiefComplaint,
      aggravatingFactors: aggravatingFactors,
      alleviatingFactors: alleviatingFactors,
      maritalStatusId: maritalStatusId,
      educationLevelId: educationLevelId,
      occupation: occupation,
      religious: religious,
      financialIssues: financialIssuesNotes,
      housingStatusId: housingStatusId,
      legalIssues: legalIssuesNotes,
      veteranStatusId: veteranStatusId,
      headInjury: headInjuryNotes,
      familyHistoryOfSuicide: familyHistoryOfSuicideNotes,
      traumaHistory: traumaHistoryNotes,
      dateCreated: Date.now(),
    };

    // POST main note body to get the noteId for symptoms, substances
    fetch(`${API}/notes?userId=${localUserObj.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteObj),
    })
      .then((res) => res.json())
      .then((note) => {
        const promises = [];

        // add each noteSymptom promise to the promise array
        for (const symptom in checkedSymptoms) {
          const symptomObj = {
            noteId: note.id,
            symptomId: parseInt(symptom),
            course: checkedSymptoms[symptom],
          };

          promises.push(
            fetch(`${API}/noteSymptoms`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(symptomObj),
            })
          );
        }

        // add each noteSubstance promise to the promise array
        for (const substance in checkedSubstances) {
          const substanceObj = {
            noteId: note.id,
            substanceId: parseInt(substance),
            lastUse: checkedSubstances[substance],
          };

          promises.push(
            fetch(`${API}/noteSubstances`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(substanceObj),
            })
          );
        }

        // Promise.all() POSTs all the bridge table data
        // final .then() will navigate to the 'read' page, console.log placeholder for now
        Promise.all(promises).then(navigate(`/create_note/${note.id}`));
      });

    // navigate to the "complete note page"
  };

  return (
    <div className="note__form">
      <h2 className="note__header">New Note</h2>
      <fieldset>
        {/* DEMOGRAPHICS / APPOINTMENT DATE & TIME */}
        <section className="note__section" id="visit-info">
          <VisitDateAndTimeSelectors
            setVisitDate={setVisitDate}
            setVisitTime={setVisitTime}
          />
          <PatientAgeField setPatientAge={setPatientAge} />
          <PatientGenderButtons setPatientGender={setPatientGender} />
          <VisitTypeButtons setVisitTypeId={setVisitTypeId} />
          <VisitLocationDropdown setVisitLocationId={setVisitLocationId} />
        </section>

        {/* SYMPTOMS AND MODIFYING FACTORS */}
        <section className="note__section" id="main-hpi">
          <ChiefComplaintTextBox setChiefComplaint={setChiefComplaint} />
          <SymptomCheckboxes
            checkedSymptoms={checkedSymptoms}
            setCheckedSymptoms={setCheckedSymptoms}
          />
          <ModifyingFactorsTextBoxes
            setAggravatingFactors={setAggravatingFactors}
            setAlleviatingFactors={setAlleviatingFactors}
          />
        </section>

        {/* PSYCHOSOCIAL SUPPORTS */}
        <section className="note__section" id="psychosocial-supports">
          <MaritalStatusDropdown setMaritalStatusId={setMaritalStatusId} />
          <EducationLevelDropdown setEducationLevelId={setEducationLevelId} />
          <OccupationTextBox setOccupation={setOccupation} />
          <ReligiousButtons setReligious={setReligious} />
          <FinancialIssuesButtons
            setFinancialIssuesNotes={setFinancialIssuesNotes}
          />
          <HousingStatusDropdown setHousingStatusId={setHousingStatusId} />
          <LegalIssuesButtons setLegalIssuesNotes={setLegalIssuesNotes} />
          <VeteranStatusDropdown setVeteranStatusId={setVeteranStatusId} />
          <HeadInjuryButtons setHeadInjuryNotes={setHeadInjuryNotes} />
          <FamilyHistoryOfSuicideButtons
            setFamilyHistoryOfSuicideNotes={setFamilyHistoryOfSuicideNotes}
          />
          <TraumaHistoryButtons setTraumaHistoryNotes={setTraumaHistoryNotes} />
        </section>

        {/* FAMILY PSYCH HX/SUBSTANCE ABUSE HX */}
        <section className="note__section" id="substance-abuse-history">
          <SubstanceCheckboxes
            checkedSubstances={checkedSubstances}
            setCheckedSubstances={setCheckedSubstances}
          />
        </section>
      </fieldset>
      <button onClick={handleSubmitNoteButtonClick}>Submit Note</button>
    </div>
  );
};
