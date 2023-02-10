const API = "http://localhost:8088";

export const DeleteNoteButton = ({ notes, setNotes, chosenNote }) => {
  const handleDeleteButtonClick = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      fetch(`${API}/notes/${chosenNote.id}`, { method: "DELETE" }).then(() => {
        const remainingNotes = notes.filter(
          (note) => note.id !== chosenNote.id
        );
        setNotes(remainingNotes);
      });
    }
  };
  return (
    <button className="delete-note__button" onClick={handleDeleteButtonClick}>
      Delete
    </button>
  );
};
