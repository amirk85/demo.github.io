import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const date = props.date;
  const title = props.title;
  const amount = props.amount;
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2 className="expense-item">{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button>Title change</button>
    </Card>
  );
}

export default ExpenseItem;
