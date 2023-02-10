import { useEffect, useState } from "react";

const API = "http://localhost:8088";

export const DateListDropdown = ({ setChosenDate }) => {
  const [notes, setNotes] = useState([]);
  const [dates, setDates] = useState([]);

  // fetch all of the notes, and make a set of the dates on initial render
  useEffect(() => {
    fetch(`${API}/notes`)
      .then((res) => res.json())
      .then((notesArray) => {
        setNotes(notesArray);
      });
  }, []);

  useEffect(() => {
    const dateSet = new Set();
    for (const note of notes) {
      dateSet.add(note.visitDate);
    }
    const dateArray = [...dateSet];
    setDates(dateArray.sort());
  }, [notes]);

  return (
    // make a dropdown of all the dates
    // onChange should set the chosen date
    <div>
      <label htmlFor="visit-dates">Visit date: </label>
      <select
        name="visit-dates"
        onChange={(evt) => setChosenDate(evt.target.value)}
      >
        <option value={0} className="form-option">
          Select a date
        </option>
        {dates.map((date) => {
          return (
            <option key={date} className="form-option">
              {date}
            </option>
          );
        })}
      </select>
    </div>
  );
};

// Set does not support .map(), so we will make an array from the Set
// relevant SO: https://stackoverflow.com/a/42624575/13615436
