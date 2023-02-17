export const AppointmentButtons = ({ filteredNotes, setChosenNote }) => {
  const handleTimeButtonClick = (evt) => {
    setChosenNote(
      filteredNotes.find((note) => note.visitTime === evt.target.value)
    );
  };

  return (
    <div>
      {filteredNotes.map((note) => {
        return (
          <button
            key={note.id}
            className="appointment__button"
            value={note.visitTime}
            onClick={handleTimeButtonClick}
          >
            {note.visitTime}
          </button>
        );
      })}
    </div>
  );
};
