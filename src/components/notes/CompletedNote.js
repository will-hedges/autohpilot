import { useEffect, useState } from "react";

import "./CompletedNote.css";

const API = "http://localhost:8088";

export const CompletedNote = ({ chosenNote }) => {
  const [noteSymptoms, setNoteSymptoms] = useState([]);
  const [noteSubstances, setNoteSubstances] = useState([]);

  useEffect(() => {
    // fetch the noteSymptoms
    fetch(`${API}/noteSymptoms?noteId=${chosenNote.id}&_expand=symptom`)
      .then((res) => res.json())
      .then((data) => {
        setNoteSymptoms(data);
      });
    // fetch the noteSubstances
    fetch(`${API}/noteSubstances?noteId=${chosenNote.id}&_expand=substance`)
      .then((res) => res.json())
      .then((data) => {
        setNoteSubstances(data);
      });
  }, [chosenNote.id]);

  return (
    <div className="complete-note">
      <section className="complete-note__preamble">
        <div>
          Patient is a {chosenNote.patientAge} y/o {chosenNote.patientGender}{" "}
          seen for {chosenNote.visitType.type}.
        </div>
      </section>
      <section className="complete-note__chief-complaint">
        <div>Chief Complaint: "{chosenNote.chiefComplaint}"</div>
      </section>

      <section className="complete-note__symptoms">
        <div className="complete-note__symptoms__list__container">
          Endorses the following symptoms:
          {noteSymptoms.map((noteSymptom) => {
            return (
              <div className="symptom" key={noteSymptom.id}>
                - {noteSymptom.course} {noteSymptom.symptom.name}
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <div className="complete-note__modifying-factors">
          <div>
            {chosenNote.aggravatingFactors
              ? `Reports the following aggravating factors: ${chosenNote.aggravatingFactors}`
              : ""}
          </div>
          <div>
            {chosenNote.alleviatingFactors
              ? `Reports the following alleviating factors: ${chosenNote.alleviatingFactors}`
              : ""}
          </div>
        </div>
      </section>

      <section className="complete-note__psychosocial-supports">
        <div>Psychosocial supports:</div>
        <div>
          {chosenNote.maritalStatus
            ? ` - marital status: ${chosenNote.maritalStatus.status}`
            : ""}
        </div>
        <div>
          {chosenNote.educationLevel
            ? ` - highest education level completed: ${chosenNote.educationLevel.levelCompleted}`
            : ""}
        </div>
        <div>
          {chosenNote.occupation
            ? ` - occupation: ${chosenNote.occupation}`
            : ""}
        </div>
        <div>{chosenNote.religious ? ` - endorses religion` : ""}</div>
        <div>
          {chosenNote.financialIssues
            ? ` - financial issues: ${chosenNote.financialIssues}`
            : ""}
        </div>
        <div>
          {chosenNote.housingStatus
            ? ` - lives with ${chosenNote.housingStatus.status}`
            : ""}
        </div>
        <div>
          {chosenNote.legalIssues
            ? ` - legal issues: ${chosenNote.legalIssues}`
            : ""}
        </div>
        <div>
          {chosenNote.veteranStatus
            ? ` - veteran status: ${chosenNote.veteranStatus.status}`
            : ""}
        </div>
        <div>
          {chosenNote.headInjury
            ? ` - history of head injury: ${chosenNote.headInjury}`
            : ""}
        </div>
        <div>
          {chosenNote.traumaHistory
            ? ` - trauma history: ${chosenNote.traumaHistory}`
            : ""}
        </div>
      </section>
      <section className="complete-note__substances__list__container">
        {noteSubstances.length > 0 ? (
          <>
            <div>Endorses use/abuse of the following substances:</div>
            <div>
              {noteSubstances.map((noteSubstance) => {
                return (
                  <div className="substance" key={noteSubstance.id}>
                    - {noteSubstance.substance.name} (last use:{" "}
                    {noteSubstance.lastUse})
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}
      </section>
    </div>
  );
};
