import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = "http://localhost:8088";

export const DateList = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const dateSet = new Set();

  // fetch all of the notes
  useEffect(() => {
    fetch(`${API}/notes`)
      .then((res) => res.json())
      .then((notesArray) => {
        setNotes(notesArray);
      });
  }, []);
  // iterate over the array of note objects and build up a set of dates
  for (const note of notes) {
    if (!dateSet.has(note.visitDate)) {
      dateSet.add(note.visitDate);
    }
  }

  // Set does not support .map(), so we will make an array from the Set
  // relevant SO: https://stackoverflow.com/a/42624575/13615436
  const dateArray = [...dateSet];

  // display each item in the set in a list
  return (
    <div className="date__list__container">
      <h2>Dates with notes/appointments</h2>
      <ul className="date__list">
        {dateArray.map((date) => {
          return (
            <li className="date__list__item" key={date}>
              <Link className="date__list__item__link" to={`/dates/${date}`}>
                {date}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
