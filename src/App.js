import React from 'react';
import './App.css';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Header from "./components/Header.jsx"

function App() {
  return (
    <div className="App">
      <AccountBalanceIcon className="App-logo" style={{ fontSize: 280 }} />
      <Header />
    </div>
  );
}

export default App;
