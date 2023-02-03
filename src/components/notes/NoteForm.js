import { VisitDate } from "./noteFields/VisitDate";

export const NoteForm = () => {
  return (
    <form className="note__form">
      <h2 className="note__header">New Note</h2>
      {VisitDate()}
    </form>
  );
};
