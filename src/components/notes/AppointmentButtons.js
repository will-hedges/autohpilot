export const AppointmentButtons = ({ filteredNotes, setChosenNote }) => {
  const handleTimeButtonClick = (evt) => {
    setChosenNote(
      filteredNotes.find((note) => note.visitTime === evt.target.value)
    );
  };

  return (
    <>
      {filteredNotes.map((note) => {
        return (
          <button
            key={note.id}
            value={note.visitTime}
            onClick={handleTimeButtonClick}
          >
            {note.visitTime}
          </button>
        );
      })}
    </>
  );
};
