import { useState } from "react";
import "./FormRequest.css";
import Modal from "./Modal";

export default function FormRequest() {
  const [loanInputs, setloanInputs] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  const [ShowModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const btnIsDisabled =
    loanInputs.name.trim() === "" ||
    loanInputs.phone.trim() === "" ||
    loanInputs.age.trim() === "" ||
    loanInputs.salaryRange === "";

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    if (loanInputs.age < 20 || loanInputs.age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (
      loanInputs.phone.trim().length < 10 ||
      loanInputs.phone.trim().length > 12
    ) {
      setErrorMessage("Phone Number Format Is Incorrect");
    }
    setShowModal(true);
  }
  function handleDivClick() {
    if (ShowModal) {
      setShowModal(false);
    }
  }
  return (
    <div className="form-container" onClick={handleDivClick}>
      <form id="loan-form">
        <h1>Requesting a Loan</h1>
        <hr />
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            value={loanInputs.name}
            onChange={(event) => {
              setloanInputs({ ...loanInputs, name: event.target.value });
            }}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number: </label>
          <input
            className="form-control"
            type="tel"
            id="phone"
            name="phone"
            min="10"
            max="12"
            autoComplete="off"
            value={loanInputs.phone}
            onChange={(event) => {
              setloanInputs({ ...loanInputs, phone: event.target.value });
            }}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age: </label>
          <input
            className="form-control"
            type="number"
            name="age"
            id="age"
            min="25"
            max="100"
            autoComplete="off"
            value={loanInputs.age}
            onChange={(event) => {
              setloanInputs({ ...loanInputs, age: event.target.value });
            }}
            required
          ></input>
        </div>
        <div className="form-group checkbox-group">
          <label htmlFor="employee">Are you an employee?</label>
          <input
            className="form-control"
            type="checkbox"
            id="employee"
            name="isEmployee"
            checked={loanInputs.isEmployee}
            onChange={(event) => {
              setloanInputs({
                ...loanInputs,
                isEmployee: event.target.checked,
              });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary: </label>
          <select
            id="salary"
            name="salary"
            className="form-control"
            required
            value={loanInputs.salaryRange}
            onChange={(event) => {
              setloanInputs({ ...loanInputs, salaryRange: event.target.value });
            }}
          >
            <option value="">-- Select salary range --</option>
            <option value="low">Less than $500</option>
            <option value="medium">between 500$ and 2000$</option>
            <option value="high">Above $2000</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={btnIsDisabled}
          onClick={handleFormSubmit}
          className="submit-btn"
        >
          Submit
        </button>
      </form>
      <Modal isVisible={ShowModal} errorMessage={errorMessage} />;
    </div>
  );
}
