import { VisitDateAndTimeSelectors } from "./noteFields/VisitDateAndTimeSelectors";
import { PatientAgeField } from "./noteFields/PatientAgeField";
import { PatientGenderButtons } from "./noteFields/PatientGenderButtons";
import { ChiefComplaintTextBox } from "./noteFields/ChiefComplaintTextBox";
import { ModifyingFactorsTextBoxes } from "./noteFields/ModifyingFactorsTextBoxes";
import { OccupationTextBox } from "./noteFields/OccupationTextBox";
import { ReligiousButtons } from "./noteFields/ReligiousButtons";
import { LegalIssuesButtons } from "./noteFields/LegalIssuesButtons";
import { FamilySuicideButtons } from "./noteFields/FamilySuicideButtons";
import { TraumaHistoryButtons } from "./noteFields/TraumaHistoryButtons";
import { HeadInjuryDropdown } from "./noteFields/HeadInjuryDropdown";
import { FinancialIssuesButtons } from "./noteFields/FinancialIssuesButtons";
import { VisitTypeButtons } from "./noteFields/VisitTypeButtons";
import { VisitLocationDropdown } from "./noteFields/VisitLocationDropdown";
import { MaritalStatusDropdown } from "./noteFields/MaritalStatusDropdown";
import { EducationLevelDropdown } from "./noteFields/EducationLevelDropdown";
import { HousingStatusDropdown } from "./noteFields/HousingStatusDropdown";
import { VeteranStatusDropdown } from "./noteFields/VeteranStatusDropdown";

export const NoteForm = () => {
  return (
    <div className="note__form">
      <h2 className="note__header">New Note</h2>
      <fieldset>
        <VisitDateAndTimeSelectors />
        <VisitTypeButtons />
        <VisitLocationDropdown />
        <PatientAgeField />
        <PatientGenderButtons />
        <ChiefComplaintTextBox />
        <MaritalStatusDropdown />
        <EducationLevelDropdown />
        <ModifyingFactorsTextBoxes />
        <OccupationTextBox />
        <ReligiousButtons />
        <FinancialIssuesButtons />
        <HousingStatusDropdown />
        <LegalIssuesButtons />
        <VeteranStatusDropdown />
        <FamilySuicideButtons />
        <TraumaHistoryButtons />
        <HeadInjuryDropdown />
      </fieldset>
    </div>
  );
};
