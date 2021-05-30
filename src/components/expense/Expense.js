import { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from './ExpenseChart';

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const onFilterYearChangeHandler = (e) => {
    setFilteredYear(e.target.value);
  };

  const filteredExpenseArray = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterYearChange={onFilterYearChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenseArray}/>
        <ExpensesList expensesList={filteredExpenseArray}/>
      </Card>
    </div>
  );
}

export default Expense;
