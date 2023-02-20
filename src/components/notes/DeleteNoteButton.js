const API = "http://localhost:8088";

export const DeleteNoteButton = ({ notes, setNotes, chosenNote }) => {
  const handleDeleteButtonClick = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      const promises = [];
      // add a promise to delete the note itself
      promises.push(
        fetch(`${API}/notes/${chosenNote.id}`, { method: "DELETE" })
      );
      // add promises for deleting note symptoms
      promises.push(
        fetch(`${API}/noteSymptoms?noteId=${chosenNote.id}`, {
          method: "DELETE",
        })
      );
      // add promises for deleting the note substances
      promises.push(
        fetch(`${API}/noteSubstances?noteId=${chosenNote.id}`, {
          method: "DELETE",
        })
      );

      Promise.all(promises).then(() => {
        // filter out the deleted note from your state
        const remainingNotes = notes.filter(
          (note) => note.id !== chosenNote.id
        );
        setNotes(remainingNotes);
      });
    }
  };
  return (
    <img
      className="my-notes__button"
      id="delete-note__button"
      onClick={handleDeleteButtonClick}
      src="delete-icon.png"
      alt="icon of a red circle with a white x"
    />
  );
};
