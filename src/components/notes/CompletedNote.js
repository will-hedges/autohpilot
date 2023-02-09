import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = "http://localhost:8088";

export const CompletedNote = () => {
  const [note, setNote] = useState({});
  const [noteSymptoms, setNoteSymptoms] = useState([]);
  const [noteSubstances, setSubstances] = useState([]);

  let { date, noteId } = useParams();
  noteId = parseInt(noteId);

  useEffect(() => {
    // fetch the 'main' note
    fetch(
      `${API}/notes/${noteId}?_expand=visitType&_expand=visitLocation&_expand=maritalStatus&_expand=educationLevel&_expand=housingStatus&_expand=veteranStatus`
    )
      .then((res) => res.json())
      .then((data) => {
        setNote(data);
      });
    // fetch the noteSymptoms
    fetch(`${API}/noteSymptoms?noteId=${noteId}&_expand=symptom`)
      .then((res) => res.json())
      .then((data) => {
        setNoteSymptoms(data);
      });
    // fetch the noteSubstances
    fetch(`${API}/noteSubstances?noteId=${noteId}&_expand=substance`)
      .then((res) => res.json())
      .then((data) => {
        setSubstances(data);
      });
  }, [noteId]);

  return (
    <div className="complete-note">
      <section className="complete-note preamble">
        <div>
          {/* TODO add seen for {visitType} - but showing up undefined for some reason */}
          Patient is a {note.patientAge} y/o {note.patientGender} seen for{" "}
          {note.visitType?.type}.
        </div>
        <div>Chief Complaint: "{note.chiefComplaint}"</div>
      </section>

      <section className="complete-note symptoms-and-factors">
        <div className="complete-note symptoms__list__container">
          Endorses the following symptoms:
          {noteSymptoms.map((noteSymptom) => {
            return (
              <div className="symptom" key={noteSymptom.id}>
                - {noteSymptom.symptom.name} ({noteSymptom.course})
              </div>
            );
          })}
        </div>
        <div className="complete-note modifying-factors">
          <div>
            {note.aggravatingFactors
              ? `Aggravating Factors: ${note.aggravatingFactors}`
              : ""}
          </div>
          <div>
            {note.alleviatingFactors
              ? `Alleviating Factors: ${note.alleviatingFactors}`
              : ""}
          </div>
        </div>
      </section>

      <section className="complete-note psychosocial-supports">
        <div>
          {note.maritalStatus
            ? `Marital Status: ${note.maritalStatus.status}`
            : ""}
        </div>
        <div>
          {note.educationLevel
            ? `Highest education level completed: ${note.educationLevel.levelCompleted}`
            : ""}
        </div>
        <div>{note.occupation ? `Occupation: ${note.occupation}` : ""}</div>
        <div>{note.religious ? `Endorses religion` : ""}</div>
        <div>
          {note.financialIssues
            ? `Financial issues: ${note.financialIssues}`
            : ""}
        </div>
        <div>
          {note.housingStaus ? `Housing status: ${note.housingStaus}` : ""}
        </div>
        <div>{note.legalIssues ? `Legal issues: ${note.legalIssues}` : ""}</div>
        <div>
          {note.veteranStatus
            ? `Veteran status: ${note.veteranStatus.status}`
            : ""}
        </div>
        <div>
          {note.headInjury ? `History of head injury: ${note.headInjury}` : ""}
        </div>
        <div>
          {note.traumaHistory ? `Trauma history: ${note.traumaHistory}` : ""}
        </div>
      </section>
      <section className="complete-note substances__list__container">
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
