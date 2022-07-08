import React, { useState, useContext } from 'react'
import GlobalContext from '../Context/GlobalContext';

const AddTransaction = () => {
    const [text, setText] = useState();
    const [amount, setAmount] = useState();

    // importing the object provided by GlobalContext in context variable
    const context = useContext(GlobalContext);
    const AddTransaction = context.AddTransaction;

    const addTransaction = (e) => {
        // preventDefault will restrict page from reloading
        e.preventDefault();
        const newTransaction = {
            text: text,
            amount: +amount
        }
        setText("");
        setAmount("Enter amount...");
        AddTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={addTransaction}>
                <div className="form-control">
                    <label htmlFor="text"><b>Text</b></label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"><b>Amount</b> <br /> (negative - expense, positive - income) </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction