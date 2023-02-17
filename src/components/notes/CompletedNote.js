import { useEffect, useState } from "react";

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
      <h3 className="complete-note__header">
        Note for {chosenNote.visitDate} @ {chosenNote.visitTime}
      </h3>
      <section className="complete-note__preamble">
        <div>
          Patient is a {chosenNote.patientAge} y/o {chosenNote.patientGender}{" "}
          seen for {chosenNote.visitType?.type}.
        </div>
        <div>Chief Complaint: "{chosenNote.chiefComplaint}"</div>
      </section>

      <section className="complete-note__symptoms-and-factors">
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
        <div className="complete-note__modifying-factors">
          <div>
            {chosenNote.aggravatingFactors
              ? `Aggravating Factors: ${chosenNote.aggravatingFactors}`
              : ""}
          </div>
          <div>
            {chosenNote.alleviatingFactors
              ? `Alleviating Factors: ${chosenNote.alleviatingFactors}`
              : ""}
          </div>
        </div>
      </section>

      <section className="complete-note__psychosocial-supports">
        <div>
          {chosenNote.maritalStatus
            ? `Marital Status: ${chosenNote.maritalStatus.status}`
            : ""}
        </div>
        <div>
          {chosenNote.educationLevel
            ? `Highest education level completed: ${chosenNote.educationLevel.levelCompleted}`
            : ""}
        </div>
        <div>
          {chosenNote.occupation ? `Occupation: ${chosenNote.occupation}` : ""}
        </div>
        <div>{chosenNote.religious ? `Endorses religion` : ""}</div>
        <div>
          {chosenNote.financialIssues
            ? `Financial issues: ${chosenNote.financialIssues}`
            : ""}
        </div>
        <div>
          {chosenNote.housingStaus
            ? `Housing status: ${chosenNote.housingStaus}`
            : ""}
        </div>
        <div>
          {chosenNote.legalIssues
            ? `Legal issues: ${chosenNote.legalIssues}`
            : ""}
        </div>
        <div>
          {chosenNote.veteranStatus
            ? `Veteran status: ${chosenNote.veteranStatus.status}`
            : ""}
        </div>
        <div>
          {chosenNote.headInjury
            ? `History of head injury: ${chosenNote.headInjury}`
            : ""}
        </div>
        <div>
          {chosenNote.traumaHistory
            ? `Trauma history: ${chosenNote.traumaHistory}`
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
