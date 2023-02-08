import { Fragment, useEffect, useState } from "react";

const API = "http://localhost:8088";

export const VisitTypeButtons = ({ setVisitTypeId }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch(`${API}/visitTypes`)
      .then((res) => res.json())
      .then((typesArray) => {
        setTypes(typesArray);
      });
  }, []);

  const handleVisitTypeChange = (evt) => {
    setVisitTypeId(parseInt(evt.target.value));
  };

  return (
    <div className="form-group">
      <form>
        <label htmlFor="visitType">Visit type:</label>
        {types.map((type) => {
          return (
            <Fragment key={type.id}>
              <input
                type="radio"
                value={type.id}
                onChange={handleVisitTypeChange}
                name="visitType"
              />
              <label htmlFor={type.visitType}>{type.visitType}</label>
            </Fragment>
          );
        })}
      </form>
    </div>
  );
};
