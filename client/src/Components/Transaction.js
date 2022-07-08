import React, { useContext } from 'react'
import GlobalContext from '../Context/GlobalContext';
import { numberWithCommas } from '../utils/format';

const Transaction = (props) => {
    const sign = props.transaction.amount < 0 ? '-' : '+';

    // importing the object provided by GlobalContext in context variable
    const context = useContext(GlobalContext);
    const DeleteTransaction = context.DeleteTransaction;

    return (
        <li className={ sign === '+' ? "plus" : "minus"}>
            {props.transaction.text} <span>{sign}&#x20B9;{numberWithCommas(Math.abs(props.transaction.amount))}</span><button onClick={()=>DeleteTransaction(props.transaction._id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction;