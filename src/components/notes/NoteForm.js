import { VisitDate } from "./noteFields/VisitDate";
import { PatientAge } from "./noteFields/PatientAge";
import { PatientGender } from "./noteFields/PatientGender";
import { ModifyingFactors } from "./noteFields/ModifyingFactors";
import { Occupation } from "./noteFields/Occupation";

export const NoteForm = () => {
  return (
    <form className="note__form">
      <h2 className="note__header">New Note</h2>
      <fieldset>
        {VisitDate()}
        {PatientAge()}
        {PatientGender()}
        {ModifyingFactors()}
        {Occupation()}
      </fieldset>
    </form>
  );
};
