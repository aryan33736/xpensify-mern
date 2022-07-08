import React, { useContext } from 'react'
import GlobalContext from '../Context/GlobalContext';
import { numberWithCommas } from '../utils/format';

const IncomeExpenses = () => {
  // importing the object provided by GlobalContext in context variable
  const context = useContext(GlobalContext);
  const transactions = context.transactions;

  const amounts = transactions.map((individual_transaction) => individual_transaction.amount);

  // Calculating Income
  const income = +(amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2));
  const incomeSign = income === 0 ? '' : '+';

  // Calculating Expense
  const expense = +(amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2));
  const expenseSign = expense === 0 ? '' : '-';

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className={income === 0 ? "money black" : "money plus"}><b>{incomeSign}&#x20B9;{numberWithCommas(income)}</b></p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className={expense === 0 ? "money black" : "money minus"}><b>{expenseSign}&#x20B9;{numberWithCommas(Math.abs(expense))}</b></p>
      </div>
    </div>
  )
}

export default IncomeExpenses;
