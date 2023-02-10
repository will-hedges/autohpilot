import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:8088";

const ConfirmDeleteButtons = ({ noteId, notes, setNotes, setDeleteNote }) => {
  const navigate = useNavigate();
  const deleteNote = () => {
    fetch(`${API}/notes/${noteId}`, { method: "DELETE" })
      .then(() => {
        notes = notes.filter((note) => note.id !== noteId);
        setNotes(notes);
      })
      .then(() => {
        if (notes.length === 0) {
          navigate("/dates");
        }
      });
  };

  return (
    <>
      <span className="confirm-delete__prompt">Are you sure?</span>
      <button
        className="confirm-delete__button"
        onClick={() => {
          deleteNote();
        }}
      >
        Yes
      </button>
      <button
        className="confirm-delete__button"
        onClick={() => setDeleteNote(false)}
      >
        No
      </button>
    </>
  );
};

export const DeleteNoteButton = ({ noteId, notes, setNotes }) => {
  const [deleteNote, setDeleteNote] = useState(false);

  const handleDeleteButtonClick = () => {
    // toggle deleteNote state
    setDeleteNote(!deleteNote);
  };

  return (
    <>
      {deleteNote ? (
        <ConfirmDeleteButtons
          noteId={noteId}
          notes={notes}
          setNotes={setNotes}
          setDeleteNote={setDeleteNote}
        />
      ) : (
        <button
          className="delete-note__button"
          id={`delete-note--4`}
          onClick={() => {
            handleDeleteButtonClick();
          }}
        >
          Delete
        </button>
      )}
    </>
  );
};
