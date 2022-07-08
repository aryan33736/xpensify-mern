import React from 'react';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import Footer from './Components/Footer';
import GlobalProvider from './Context/GlobalProvider';
import './App.css';
function App() {
  return (
    <GlobalProvider>
      <div id="main-container">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
        <Footer />
      </div>
      </GlobalProvider>
  )
}

export default App;