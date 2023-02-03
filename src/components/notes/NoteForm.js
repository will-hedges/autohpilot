import { VisitDate } from "./noteFields/VisitDate";
import { PatientAge } from "./noteFields/PatientAge";

export const NoteForm = () => {
  return (
    <form className="note__form">
      <h2 className="note__header">New Note</h2>
      <fieldset>
        {VisitDate()}
        {PatientAge()}
      </fieldset>
    </form>
  );
};
