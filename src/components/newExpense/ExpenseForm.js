import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [isValidTitleInput, setIsValidTitleValidInput] = useState(true);
  const [isValidAmountInput, setIsValidAmountValidInput] = useState(true);
  const [isValidDateInput, setIsValidDateInput] = useState(true);

  const titleChangeHandler = (event) => {
    setIsValidTitleValidInput(true);
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setIsValidAmountValidInput(true);
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setIsValidDateInput(true);
    setEnteredDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredTitle === "") {
      setIsValidTitleValidInput(false);
    }

    if (enteredAmount === "") {
      setIsValidAmountValidInput(false);
    }

    if (enteredDate === "") {
      setIsValidDateInput(false);
    }
    
    if(enteredTitle === "" || enteredAmount === "" || enteredDate === ""){
      return;
    }

    const formData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(formData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const stopEditing = () => {
    props.stopEdit();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div
          className={`new-expense__control ${
            !isValidTitleInput ? "invalidTitleInput" : ""
          }`}
        >
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div
          className={`new-expense__control ${
            !isValidAmountInput ? "invalidAmountInput" : ""
          }`}
        >
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div
          className={`new-expense__control ${
            !isValidDateInput ? "invalidDateInput" : ""
          }`}
        >
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <button
        type="button"
        className="new-expense__actions"
        onClick={stopEditing}
      >
        Cancel
      </button>
      <button type="submit" className="new-expense__actions">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
