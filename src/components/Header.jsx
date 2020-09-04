import React from 'react';
import Register from './register.jsx'
import Login from './login.jsx'

function Header(props) {
  return (
    <header className="App-header">
      <header> Welcome to The Simple Bank </header>
        <div className="App-LR">
          <Login />
          <Register />
        </div>
    </header>
  );
}

export default Header;
