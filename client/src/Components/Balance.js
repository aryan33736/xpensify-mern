import React, { useContext } from 'react'
import GlobalContext from '../Context/GlobalContext';
import { numberWithCommas } from '../utils/format';

const Balance = () => {
    // importing the object provided by GlobalContext in context variable
    const context = useContext(GlobalContext);
    const transactions = context.transactions;

    const amounts = transactions.map((individual_transaction) => individual_transaction.amount);
    // toFixed will return a string so to convert totalBalance to number add +
    const totalBalance = +(amounts.reduce((acc, item) => (acc += item), 0).toFixed(2));

    const sign = totalBalance===0 ? '' : totalBalance<0 ? '-' : '+';
    return (
        <>
            <h4>Your Balance</h4>
            <h1 className={ sign === '' ? "black" : sign === '+' ? "green" : "red"}><strong>{sign}&#x20B9;{numberWithCommas(Math.abs(totalBalance))}</strong></h1>
        </>
    )
}

export default Balance;
