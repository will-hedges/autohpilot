import { Outlet, Route, Routes } from "react-router-dom";

import { CompletedNote } from "../notes/CompletedNote";
import { DateList } from "../notes/DateList";
import { NoteForm } from "../notes/NoteForm";
import { NoteList } from "../notes/NoteList";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1 className="title--main">Auto(HPI)lot</h1>
            <div>Decreasing charting fatigue, one note at a time.</div>
            <Outlet />
          </>
        }
      />
      <Route path="dates" element={<DateList />} />
      <Route path="dates/:date" element={<NoteList />} />
      <Route path="dates/:date/:noteId" element={<CompletedNote />} />
      <Route path="create_note" element={<NoteForm />} />
    </Routes>
  );
};
