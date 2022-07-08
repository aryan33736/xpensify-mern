import React, { useContext, useEffect } from 'react'
import GlobalContext from '../Context/GlobalContext';
import Transaction from './Transaction';

const TransactionList = () => {
    
    // importing the object provided by GlobalContext in context variable
    const context = useContext(GlobalContext);
    const transactions = context.transactions;
    const GetTransaction = context.GetTransaction;

    useEffect( () => {
        GetTransaction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // [] means useEffect will get executed only one time

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((individual_transaction) => (<Transaction key={individual_transaction._id} transaction={individual_transaction}/>))}
            </ul>
        </>
    )
}

export default TransactionList;