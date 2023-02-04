import { VisitDateAndTime } from "./noteFields/VisitDateAndTime";
import { PatientAge } from "./noteFields/PatientAge";
import { PatientGender } from "./noteFields/PatientGender";
import { ChiefComplaint } from "./noteFields/ChiefComplaint";
import { ModifyingFactors } from "./noteFields/ModifyingFactors";
import { Occupation } from "./noteFields/Occupation";
import { Religious } from "./noteFields/Religious";
import { LegalIssues } from "./noteFields/LegalIssues";
import { FamilySuicide } from "./noteFields/FamilySuicide";
import { Trauma } from "./noteFields/Trauma";
import { HeadInjury } from "./noteFields/HeadInjury";
import { FinancialIssues } from "./noteFields/FinancialIssues";
import { VisitType } from "./noteFields/VisitType";

export const NoteForm = () => {
  return (
    <div className="note__form">
      <h2 className="note__header">New Note</h2>
      <fieldset>
        <VisitDateAndTime />
        <VisitType />
        <PatientAge />
        <PatientGender />
        <ChiefComplaint />
        <ModifyingFactors />
        <Occupation />
        <Religious />
        <FinancialIssues />
        <LegalIssues />
        <FamilySuicide />
        <Trauma />
        <HeadInjury />
      </fieldset>
    </div>
  );
};
