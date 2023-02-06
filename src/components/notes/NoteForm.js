import { ChiefComplaintTextBox } from "../fields/ChiefComplaintTextBox";
import { EducationLevelDropdown } from "../fields/EducationLevelDropdown";
import { FamilySuicideButtons } from "../fields/FamilySuicideButtons";
import { FinancialIssuesButtons } from "../fields/FinancialIssuesButtons";
import { HeadInjuryDropdown } from "../fields/HeadInjuryDropdown";
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
        <SymptomCheckboxes />
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
        <SubstanceCheckboxes />
        <FamilySuicideButtons />
        {/* TODO childhood? */}
        <TraumaHistoryButtons />
      </fieldset>
    </div>
  );
};
