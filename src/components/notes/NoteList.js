import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DeleteNoteButton } from "./DeleteNoteButton";

const API = "http://localhost:8088";

export const NoteList = () => {
  const [notes, setNotes] = useState([]);

  const { date } = useParams();

  useEffect(() => {
    fetch(`${API}/notes?visitDate=${date}&_expand=visitType`)
      .then((res) => res.json())
      .then((notesArray) => {
        setNotes(notesArray);
      });
  }, [date]);

  return (
    <div className="note__list__container">
      <h2>Notes from {date}</h2>
      <ul className="note__list">
        {notes.map((note) => {
          return (
            <li className="note__list__item" key={note.id}>
              <Link
                className="note__list__item__link"
                to={`/dates/${date}/${note.id}`}
              >
                {note.patientAge} {note.patientGender} @ {note.visitTime} (
                {note.visitType.type})
              </Link>
              <DeleteNoteButton noteId={note.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
