import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

import { MyNotes } from "../notes/MyNotes";
import { NewNote } from "../notes/NewNote";
import { NoteForm } from "../notes/NoteForm";

import "./ApplicationViews.css";

export const ApplicationViews = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div id="page__header">
            <h1 className="title--main">Auto(HPI)lot</h1>
            <div>Decreasing charting fatigue, one note at a time.</div>
            <div id="landing-page__container">
              <h2 className="title__text">Let's get started!</h2>
              <div id="landing-page-buttons__container">
                <button
                  className="landing-page__button"
                  id="new-note__button"
                  onClick={() => navigate("/create_note")}
                >
                  Write a New Note
                </button>
                <button
                  className="landing-page__button"
                  id="view-notes__button"
                  onClick={() => navigate("/my_notes")}
                >
                  View My Saved Notes
                </button>
              </div>
            </div>
            <Outlet />
          </div>
        }
      />
      <Route path="my_notes" element={<MyNotes />} />
      <Route path="create_note" element={<NoteForm />} />
      <Route path="create_note/:noteId" element={<NewNote />} />
    </Routes>
  );
};
