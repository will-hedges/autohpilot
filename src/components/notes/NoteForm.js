import { ChiefComplaintTextBox } from "./noteFields/ChiefComplaintTextBox";
import { EducationLevelDropdown } from "./noteFields/EducationLevelDropdown";
import { FamilySuicideButtons } from "./noteFields/FamilySuicideButtons";
import { FinancialIssuesButtons } from "./noteFields/FinancialIssuesButtons";
import { HeadInjuryDropdown } from "./noteFields/HeadInjuryDropdown";
import { HousingStatusDropdown } from "./noteFields/HousingStatusDropdown";
import { LegalIssuesButtons } from "./noteFields/LegalIssuesButtons";
import { MaritalStatusDropdown } from "./noteFields/MaritalStatusDropdown";
import { ModifyingFactorsTextBoxes } from "./noteFields/ModifyingFactorsTextBoxes";
import { OccupationTextBox } from "./noteFields/OccupationTextBox";
import { PatientAgeField } from "./noteFields/PatientAgeField";
import { PatientGenderButtons } from "./noteFields/PatientGenderButtons";
import { ReligiousButtons } from "./noteFields/ReligiousButtons";
import { SymptomsCheckboxes } from "./noteFields/SymptomsCheckboxes";
import { TraumaHistoryButtons } from "./noteFields/TraumaHistoryButtons";
import { VeteranStatusDropdown } from "./noteFields/VeteranStatusDropdown";
import { VisitDateAndTimeSelectors } from "./noteFields/VisitDateAndTimeSelectors";
import { VisitLocationDropdown } from "./noteFields/VisitLocationDropdown";
import { VisitTypeButtons } from "./noteFields/VisitTypeButtons";

export const NoteForm = () => {
  return (
    <div className="note__form">
      <h2 className="note__header">New Note</h2>
      <fieldset>
        <VisitDateAndTimeSelectors />
        <PatientAgeField />
        <PatientGenderButtons />
        <VisitTypeButtons />
        <VisitLocationDropdown />
        <ChiefComplaintTextBox />
        {/* TODO symptoms will go here */}
        <SymptomsCheckboxes />
        <ModifyingFactorsTextBoxes />

        {/* PSYCHOSOCIAL SUPPORTS */}
        <MaritalStatusDropdown />
        <EducationLevelDropdown />
        <OccupationTextBox />
        <ReligiousButtons />
        <FinancialIssuesButtons />
        <HousingStatusDropdown />
        <LegalIssuesButtons />
        <VeteranStatusDropdown />
        <HeadInjuryDropdown />

        {/* FAMILY PSYCH HX/SUBSTANCE ABUSE HX */}
        {/* TODO substances will go here */}
        <FamilySuicideButtons />
        {/* TODO childhood? */}
        <TraumaHistoryButtons />
      </fieldset>
    </div>
  );
};
