import { useState } from "react";

const API = "http://localhost:8088";

const ConfirmDeleteButtons = ({ noteId, setDeleteNote }) => {
  const deleteNote = () => {
    console.log("Delete fetch goes here!");
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

export const DeleteNoteButton = ({ noteId }) => {
  const [deleteNote, setDeleteNote] = useState(false);

  const handleDeleteButtonClick = () => {
    // toggle deleteNote state
    setDeleteNote(!deleteNote);
  };

  return (
    <>
      {deleteNote ? (
        <ConfirmDeleteButtons noteId={noteId} setDeleteNote={setDeleteNote} />
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
