import { useState } from "react";
import "./App.css";
import Expense from "./components/expense/Expense";
import NewExpense from "./components/newExpense/NewExpense";

const INITIAL_DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenseArr,setExpenseArr] = useState(INITIAL_DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenseArr((prevExpenseArr) => {
      return [expenseData,...prevExpenseArr];
    });
  };

  return (
    <div className="screen">
      {/* <h1 className="heading-1">Opolo Finance Tracker</h1> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenseArr} />
    </div>
  );
}

export default App;
