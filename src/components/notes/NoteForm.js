import { VisitDate } from "./noteFields/VisitDate";
import { PatientAge } from "./noteFields/PatientAge";
import { PatientGender } from "./noteFields/PatientGender";
import { ModifyingFactors } from "./noteFields/ModifyingFactors";
import { Occupation } from "./noteFields/Occupation";
import { Religious } from "./noteFields/Religious";
import { LegalIssues } from "./noteFields/LegalIssues";
import { FamilySuicide } from "./noteFields/FamilySuicide";
import { ChildhoodTrauma } from "./noteFields/ChildhoodTrauma";
import { HeadInjury } from "./noteFields/HeadInjury";

export const NoteForm = () => {
  return (
    <div className="note__form">
      <h2 className="note__header">New Note</h2>
      <fieldset>
        {VisitDate()}
        {PatientAge()}
        {PatientGender()}
        {ModifyingFactors()}
        {Occupation()}
        {Religious()}
        {LegalIssues()}
        {FamilySuicide()}
        {ChildhoodTrauma()}
        {HeadInjury()}
      </fieldset>
    </div>
  );
};
