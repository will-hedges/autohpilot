import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ChiefComplaintTextBox } from "../fields/ChiefComplaintTextBox";
import { EducationLevelDropdown } from "../fields/EducationLevelDropdown";
import { FamilySuicideButtons } from "../fields/FamilySuicideButtons";
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

const API = "http://localhost:8088";

export const NoteForm = () => {
  const navigate = useNavigate();
  const localUserObj = JSON.parse(localStorage.getItem("autohpilot_user"));

  const [visitDate, setVisitDate] = useState(""); // default today?
  const [visitTime, setVisitTime] = useState(""); // default now?
  const [patientAge, setPatientAge] = useState(0);
  const [patientGender, setPatientGender] = useState("");
  const [visitType, setVisitType] = useState("");
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
  const [housingStatusId, setHousingStatusId] = useState();
  const [legalIssuesNotes, setLegalIssuesNotes] = useState("");
  const [veteranStatusId, setVeteranStatusId] = useState(0);
  const [headInjuryNotes, setHeadInjuryNotes] = useState("");
  const [checkedSubstances, setCheckedSubstances] = useState({});
  const [familySuicideHistoryNotes, setFamilySuicideHistoryNotes] =
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
      visitType: visitType,
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
      familySuicideHistory: familySuicideHistoryNotes,
      traumaHistory: traumaHistoryNotes,
      dateCreated: Date.now(),
    };

    // POST main note body to get the noteId for symptoms, substances
    fetch(`${API}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteObj),
    })
      .then((res) => res.json())
      .then((data) => {
        const promises = [];

        // add each noteSymptom promise to the promise array
        for (const symptom in checkedSymptoms) {
          const symptomObj = {
            noteId: data.id,
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
            noteId: data.id,
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
        // TODO final .then() will navigate to the 'read' page, console.log placeholder for now
        Promise.all(promises).then(console.log("posted!"));
      });

    // navigate to the "complete note page"
  };

  return (
    <div className="note__form">
      <h2 className="note__header">New Note</h2>
      <fieldset>
        {/* DEMOGRAPHICS / APPOINTMENT DATE & TIME */}
        <VisitDateAndTimeSelectors
          setVisitDate={setVisitDate}
          setVisitTime={setVisitTime}
        />
        <PatientAgeField setPatientAge={setPatientAge} />
        <PatientGenderButtons setPatientGender={setPatientGender} />
        <VisitTypeButtons setVisitType={setVisitType} />
        <VisitLocationDropdown setVisitLocationId={setVisitLocationId} />

        {/* SYMPTOMS AND MODIFYING FACTORS */}
        <ChiefComplaintTextBox setChiefComplaint={setChiefComplaint} />
        <SymptomCheckboxes
          checkedSymptoms={checkedSymptoms}
          setCheckedSymptoms={setCheckedSymptoms}
        />
        <ModifyingFactorsTextBoxes
          setAggravatingFactors={setAggravatingFactors}
          setAlleviatingFactors={setAlleviatingFactors}
        />

        {/* PSYCHOSOCIAL SUPPORTS */}
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

        {/* FAMILY PSYCH HX/SUBSTANCE ABUSE HX */}
        <SubstanceCheckboxes
          checkedSubstances={checkedSubstances}
          setCheckedSubstances={setCheckedSubstances}
        />
        {/* TODO refactor this component name. still don't like it */}
        <FamilySuicideButtons
          setFamilySuicideHistoryNotes={setFamilySuicideHistoryNotes}
        />
        <TraumaHistoryButtons setTraumaHistoryNotes={setTraumaHistoryNotes} />
      </fieldset>
      <button onClick={handleSubmitNoteButtonClick}>Submit Note</button>
    </div>
  );
};
