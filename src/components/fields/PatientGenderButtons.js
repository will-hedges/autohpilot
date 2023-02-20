import { Fragment } from "react";

export const PatientGenderButtons = ({ setPatientGender }) => {
  const handleGenderChange = (evt) => {
    setPatientGender(evt.target.value);
  };

  return (
    <form className="form-group">
      <label htmlFor="patient-gender" className="field__label">
        Patient Gender:
      </label>
      <Fragment>
        <input
          type="radio"
          value="M"
          id="male"
          onChange={handleGenderChange}
          name="gender"
        />
        <label htmlFor="male" className="radio__label">
          Male
        </label>

        <input
          type="radio"
          className="radio__button"
          value="F"
          id="female"
          onChange={handleGenderChange}
          name="gender"
        />
        <label htmlFor="female" className="radio__label">
          Female
        </label>
      </Fragment>
    </form>
  );
};
