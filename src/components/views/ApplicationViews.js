import { Outlet, Route, Routes } from "react-router-dom";

import { MyNotes } from "../notes/MyNotes";
import { NewNote } from "../notes/NewNote";
import { NoteForm } from "../notes/NoteForm";

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
      <Route path="my_notes" element={<MyNotes />} />
      <Route path="create_note" element={<NoteForm />} />
      <Route path="create_note/:noteId" element={<NewNote />} />
    </Routes>
  );
};
