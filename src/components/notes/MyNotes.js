import { useEffect, useState } from "react";
import { DateListDropdown } from "./DateListDropdown";
import { AppointmentButtons } from "./AppointmentButtons";
import { CompletedNote } from "./CompletedNote";
import { DeleteNoteButton } from "./DeleteNoteButton";

import "./MyNotes.css";

const API = "http://localhost:8088";

export const MyNotes = () => {
  const localUserObj = JSON.parse(localStorage.getItem("autohpilot_user"));

  const [chosenDate, setChosenDate] = useState("");
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [chosenNote, setChosenNote] = useState({});

  // fetch and expand all notes
  useEffect(() => {
    fetch(
      // need to query the userId
      `${API}/notes?userId=${localUserObj.id}&_expand=visitLocation&_expand=visitType&_expand=maritalStatus&_expand=educationLevel&_expand=housingStatus&_expand=veteranStatus`
    )
      .then((res) => res.json())
      .then((notesArray) => {
        setNotes(notesArray);
      });
  }, []);

  useEffect(() => {
    if (chosenDate) {
      const datedNotes = notes.filter((note) => note.visitDate === chosenDate);
      setFilteredNotes(datedNotes);
      setChosenNote("");
    }
  }, [chosenDate, notes]);

  return (
    <>
      <h2 className="my-notes__header">View My Notes</h2>
      <div className="my-notes__selector__container">
        <DateListDropdown
          setChosenDate={setChosenDate}
          notes={notes}
          setNotes={setNotes}
        />
        <AppointmentButtons
          filteredNotes={filteredNotes}
          setChosenNote={setChosenNote}
        />
      </div>
      {chosenNote.hasOwnProperty("id") ? (
        <div className="complete-note__container">
          <h3 className="complete-note__header">
            Note for {chosenNote.visitDate} @ {chosenNote.visitTime}
          </h3>
          <CompletedNote chosenNote={chosenNote} />
          <DeleteNoteButton
            notes={notes}
            setNotes={setNotes}
            chosenNote={chosenNote}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
