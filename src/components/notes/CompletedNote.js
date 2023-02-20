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
  }, [chosenNote.id, chosenNote?.visitType?.type]);

  return (
    <div className="complete-note">
      <section className="complete-note__preamble">
        <div>
          Patient is a {chosenNote.patientAge} y/o {chosenNote.patientGender}{" "}
          seen for {chosenNote?.visitType?.type}.{"\n"}
        </div>
      </section>
      <section className="complete-note__chief-complaint">
        <div>
          {"\n"}Chief Complaint: "{chosenNote.chiefComplaint}"{"\n"}
        </div>
      </section>

      <section className="complete-note__symptoms">
        <div className="complete-note__symptoms__list__container">
          {"\n"}Endorses the following symptoms:{"\n"}
          {noteSymptoms.map((noteSymptom) => {
            return (
              <div className="symptom" key={noteSymptom.id}>
                {" "}
                - {noteSymptom.course ? noteSymptom.course + " " : ""}
                {noteSymptom.symptom.name}
                {"\n"}
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <div className="complete-note__modifying-factors">
          <div>
            {chosenNote.aggravatingFactors
              ? `Reports the following aggravating factors: ${
                  chosenNote.aggravatingFactors
                }${"\n"}`
              : ""}
          </div>
          <div>
            {chosenNote.alleviatingFactors
              ? `Reports the following alleviating factors: ${
                  chosenNote.alleviatingFactors
                }${"\n"}`
              : ""}
          </div>
        </div>
      </section>

      <section className="complete-note__psychosocial-supports">
        <div>
          {"\n"}Psychosocial supports:{"\n"}
        </div>
        <div>
          {chosenNote.maritalStatus
            ? ` - marital status: ${chosenNote.maritalStatus.status}${"\n"}`
            : ""}
        </div>
        <div>
          {chosenNote.educationLevel
            ? ` - highest education level completed: ${
                chosenNote.educationLevel.levelCompleted
              }${"\n"}`
            : ""}
        </div>
        <div>
          {chosenNote.occupation
            ? ` - occupation: ${chosenNote.occupation}${"\n"}`
            : ""}
        </div>
        <div>{chosenNote.religious ? ` - endorses religion${"\n"}` : ""}</div>
        <div>
          {chosenNote.financialIssues
            ? ` - financial issues: ${chosenNote.financialIssues}${"\n"}`
            : ""}
        </div>
        <div>
          {chosenNote.housingStatus
            ? ` - lives with ${chosenNote.housingStatus.status}${"\n"}`
            : ""}
        </div>
        <div>
          {chosenNote.legalIssues
            ? ` - legal issues: ${chosenNote.legalIssues}${"\n"}`
            : ""}
        </div>
        <div>
          {chosenNote.veteranStatus
            ? ` - veteran status: ${chosenNote.veteranStatus.status}${"\n"}`
            : ""}
        </div>
        <div>
          {chosenNote.headInjury
            ? ` - history of head injury: ${chosenNote.headInjury}${"\n"}`
            : ""}
        </div>
        <div>
          {chosenNote.traumaHistory
            ? ` - trauma history: ${chosenNote.traumaHistory}${"\n"}`
            : ""}
        </div>
      </section>
      <section className="complete-note__substances__list__container">
        {noteSubstances.length > 0 ? (
          <>
            <div>
              {"\n"}Endorses use/abuse of the following substances:{"\n"}
            </div>
            <div>
              {noteSubstances.map((noteSubstance) => {
                return (
                  <div className="substance" key={noteSubstance.id}>
                    {" "}
                    - {noteSubstance.substance.name} (notes:{" "}
                    {noteSubstance.lastUse}){"\n"}
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
