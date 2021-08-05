import React from 'react';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';

class App extends React.Component {
  render() {
    const nombreTienda = 'Jamiroquai Store';
    const slogan = `CDs, remeras, merchandise de todo tipo!`;
    return (
      <div className="App">
        <NavBar></NavBar>
        <h1>{nombreTienda}</h1>
        <p>{slogan}</p>
      </div>
    );
  }
}

export default App;