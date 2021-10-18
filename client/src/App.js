import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  /**
   * Fonction permettant de call mon api pour récupérer les users
   */
  const handleClick = async () => {

    const data = await fetch('/users')
    const usersJson = data.json()

    console.log(usersJson)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Button</button>
      </header>
    </div>
  );
}

export default App;
