import { useState } from "react";

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

export const NoteForm = () => {
  // TODO initial state for anything NOT saved on it's own table
  //  should initially be a blank string
  const [visitDate, setVisitDate] = useState();
  const [visitTime, setVisitTime] = useState();
  const [patientAge, setPatientAge] = useState();
  const [patientGender, setPatientGender] = useState();
  const [visitType, setVisitType] = useState();
  const [visitLocation, setVisitLocation] = useState();
  const [chiefComplaint, setChiefComplaint] = useState();
  const [checkedSymptoms, setCheckedSymptoms] = useState({});
  const [aggravatingFactors, setAggravatingFactors] = useState();
  const [alleviatingFactors, setAlleviatingFactors] = useState();
  const [maritalStatus, setMaritalStatus] = useState();
  const [educationLevel, setEducationLevel] = useState();
  const [occupation, setOccupation] = useState();
  const [religious, setReligious] = useState();
  const [financialIssuesNotes, setFinancialIssuesNotes] = useState();
  const [housingStatus, setHousingStatus] = useState();
  const [legalIssuesNotes, setLegalIssuesNotes] = useState("");
  const [veteranStatus, setVeteranStatus] = useState();
  const [headInjuryNotes, setHeadInjuryNotes] = useState("");
  const [checkedSubstances, setCheckedSubstances] = useState({});
  const [familySuicideHistoryNotes, setFamilySuicideHistoryNotes] =
    useState("");
  const [traumaHistoryNotes, setTraumaHistoryNotes] = useState("");

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
        <VisitLocationDropdown setVisitLocation={setVisitLocation} />

        {/* SYMPTOMS AND MODIFYING FACTORS */}
        <ChiefComplaintTextBox setChiefComplaint={setChiefComplaint} />
        <SymptomCheckboxes
          checkedSymptoms={checkedSymptoms}
          setCheckedSymptoms={setCheckedSymptoms}
        />
        <ModifyingFactorsTextBoxes
          setAggravatingFactors={setAggravatingFactors}
          stAlleviatingFactors={setAlleviatingFactors}
        />

        {/* PSYCHOSOCIAL SUPPORTS */}
        <MaritalStatusDropdown setMaritalStatus={setMaritalStatus} />
        <EducationLevelDropdown setEducationLevel={setEducationLevel} />
        <OccupationTextBox setOccupation={setOccupation} />
        <ReligiousButtons setReligious={setReligious} />
        <FinancialIssuesButtons
          setFinancialIssuesNotes={setFinancialIssuesNotes}
        />
        <HousingStatusDropdown setHousingStatus={setHousingStatus} />
        <LegalIssuesButtons setLegalIssuesNotes={setLegalIssuesNotes} />
        <VeteranStatusDropdown setVeteranStatus={setVeteranStatus} />
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
      <button>Save Note</button>
    </div>
  );
};
