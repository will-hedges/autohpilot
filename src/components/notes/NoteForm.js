import { VisitDate } from "./noteFields/VisitDate";
import { PatientAge } from "./noteFields/PatientAge";
import { PatientGender } from "./noteFields/PatientGender";
import { ModifyingFactors } from "./noteFields/ModifyingFactors";
import { Occupation } from "./noteFields/Occupation";
import { Religious } from "./noteFields/Religious";
import { LegalIssues } from "./noteFields/LegalIssues";
import { FamilySuicide } from "./noteFields/FamilySuicide";
import { Trauma } from "./noteFields/Trauma";
import { HeadInjury } from "./noteFields/HeadInjury";
import { ChiefComplaint } from "./noteFields/ChiefComplaint";

export const NoteForm = () => {
  return (
    <div className="note__form">
      <h2 className="note__header">New Note</h2>
      <fieldset>
        {VisitDate()}
        {PatientAge()}
        {PatientGender()}
        {ChiefComplaint()}
        {ModifyingFactors()}
        {Occupation()}
        {Religious()}
        {LegalIssues()}
        {FamilySuicide()}
        {Trauma()}
        {HeadInjury()}
      </fieldset>
    </div>
  );
};
