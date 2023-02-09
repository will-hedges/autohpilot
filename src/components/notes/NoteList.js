import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = "http://localhost:8088";
export const NoteList = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(
      `${API}/notes?_expand=visitType&_expand=visitLocation&_expand=maritalStatus&_expand=educationLevel&_expand=housingStatus&_expand=veteranStatus&_sort=visitDate`
    )
      .then((res) => res.json())
      .then((notesArray) => {
        setNotes(notesArray);
      });
  }, []);
  // loop over that array
  // for each obj in the array
  // display each note as mm/dd/yyyy @ hh:mm - ## M/F - Initial visit/follow-up
  return (
    <ul className="note__list">
      {notes.map((note) => {
        return (
          <li className="note__list__item" key={note.id}>
            <Link className="note__list__item__link" to={`/notes/${note.id}`}>
              {note.visitDate} @ {note.visitTime} ({note.patientAge}{" "}
              {note.patientGender} {note.visitType.type})
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
