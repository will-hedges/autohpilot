import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API = "http://localhost:8088";

export const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const { date } = useParams();

  useEffect(() => {
    fetch(`${API}/notes?visitDate=${date}&_expand=visitType&_sort=visitTime`)
      .then((res) => res.json())
      .then((notesArray) => {
        setNotes(notesArray);
      });
  }, [date]);

  return (
    <ul className="note__list">
      {notes.map((note) => {
        return (
          <li className="note__list__item" key={note.id}>
            <Link
              className="note__list__item__link"
              to={`/dates/${date}/${note.id}`}
            >
              {note.patientAge} {note.patientGender} {note.visitType.type} @{" "}
              {note.visitTime}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
