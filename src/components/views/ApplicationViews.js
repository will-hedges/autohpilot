import { Outlet, Route, Routes } from "react-router-dom";
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
      <Route path="notes" element={<NoteList />} />
      <Route path="notes/create" element={<NoteForm />} />
    </Routes>
  );
};
