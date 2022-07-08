const Reducer = (state, action) => {
    if (action.type === 'GetTransaction') {
        state.transactions = action.payload;
        state.loading = false;
        const updatedState = { ...state };
        return updatedState;
    }
    else if (action.type === 'DeleteTransaction') {
        state.transactions = state.transactions.filter((individual_transaction) => individual_transaction._id !== action.payload);
        const updatedState = { ...state };
        return updatedState;
    }
    else if (action.type === 'AddTransaction') {
        const newindividualTransaction = action.payload;
        state.transactions = [...state.transactions, newindividualTransaction];
        const updatedState = { ...state };
        return updatedState;
    }
    else if (action.type === 'TransactionError') {
        state.error = action.payload;
        const updatedState = { ...state };
        return updatedState;
    }
    else {
        return state;
    }
}

export default Reducer;