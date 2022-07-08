import React, { useReducer } from "react";
import GlobalContext from "./GlobalContext";
import Reducer from './Reducer';
import axios from 'axios';

const GlobalProvider = (props) => {

    // Initial State
    const InitialState = {
        transactions: [],
        error: null,
        loading: true
    }

    const [state, dispatch] = useReducer(Reducer, InitialState);

    // GetTransaction Function to get the transaction
    async function GetTransaction() {
        const res = await axios('/api/v1/transactions');
        // res.data will be the object containing sucess , count , data
        // res.data.data will be the array of data
        try {
            dispatch({
                type: 'GetTransaction',
                payload: res.data.data
            });
        } catch (error) {
            dispatch({
                type: 'TransactionError',
                payload: error.response.data.error
            });
        }
    }

    // DeleteTransaction Function to delete the transaction
    async function DeleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);

            dispatch({
                type: 'DeleteTransaction',
                payload: id
            });
        } catch (error) {
            dispatch({
                type: 'TransactionError',
                payload: error.response.data.error
            });
        }
    }

    // AddTransaction Function to Add the transaction
    async function AddTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
            // config object is needed to be passed as parameter when we make post request
        }
        try {
            const res = await axios.post('/api/v1/transactions', transaction, config);
            console.log(res, res.data, res.data.data);
            dispatch({
                type: 'AddTransaction',
                payload: res.data.data
            });
        } catch (error) {
            dispatch({
                type: 'TransactionError',
                payload: error.response.data.error
            });
        }
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        GetTransaction,
        DeleteTransaction,
        AddTransaction
    }}>
        {props.children}
    </GlobalContext.Provider>);
}

export default GlobalProvider;
