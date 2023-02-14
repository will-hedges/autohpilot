import { useEffect, useState } from "react";
import { DateListDropdown } from "./DateListDropdown";
import { AppointmentButtons } from "./AppointmentButtons";
import { CompletedNote } from "./CompletedNote";
import { DeleteNoteButton } from "./DeleteNoteButton";

const API = "http://localhost:8088";

export const MyNotes = () => {
  const [chosenDate, setChosenDate] = useState("");
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [chosenNote, setChosenNote] = useState({});

  // fetch and expand all notes
  useEffect(() => {
    fetch(
      // need to query the userId
      `${API}/notes?_expand=visitLocation&_expand=visitType&_expand=maritalStatus&_expand=educationLevel&_expand=housingStatus&_expand=veteranStatus`
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
      <DateListDropdown
        setChosenDate={setChosenDate}
        notes={notes}
        setNotes={setNotes}
      />
      <AppointmentButtons
        filteredNotes={filteredNotes}
        setChosenNote={setChosenNote}
      />
      {chosenNote.hasOwnProperty("id") ? (
        <>
          <CompletedNote chosenNote={chosenNote} />
          <DeleteNoteButton
            notes={notes}
            setNotes={setNotes}
            chosenNote={chosenNote}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};
