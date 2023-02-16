import { Fragment, useEffect, useState } from "react";

const API = "http://localhost:8088";

export const VisitTypeButtons = ({ setVisitTypeId }) => {
  const [visitTypes, setVisitTypes] = useState([]);

  useEffect(() => {
    fetch(`${API}/visitTypes`)
      .then((res) => res.json())
      .then((typesArray) => {
        setVisitTypes(typesArray);
      });
  }, []);

  const handleVisitTypeChange = (evt) => {
    setVisitTypeId(parseInt(evt.target.value));
  };

  return (
    <div className="form-group">
      <form>
        <label htmlFor="visit-type" className="field__label">
          Visit type:
        </label>
        {visitTypes.map((visitType) => {
          return (
            <Fragment key={visitType.id}>
              <input
                type="radio"
                value={visitType.id}
                onChange={handleVisitTypeChange}
                name="visit-type"
              />
              <label htmlFor={visitType.type} className="radio__label">
                {visitType.type}
              </label>
            </Fragment>
          );
        })}
      </form>
    </div>
  );
};
