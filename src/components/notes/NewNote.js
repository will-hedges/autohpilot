import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompletedNote } from "./CompletedNote";

const API = "http://localhost:8088";

export const NewNote = () => {
  const [newNote, setNewNote] = useState({});
  const { noteId } = useParams();

  useEffect(() => {
    fetch(
      `${API}/notes/${noteId}/?_expand=visitLocation&_expand=visitType&_expand=maritalStatus&_expand=educationLevel&_expand=housingStatus&_expand=veteranStatus`
    )
      .then((res) => res.json())
      .then((note) => {
        setNewNote(note);
      });
  }, [noteId]);

  return <CompletedNote chosenNote={newNote} />;
};
