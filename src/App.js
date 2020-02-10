import React from 'react';
import logo from './wooleahLogo.png';
import './App.css';

function whatIsSheDoing(verb, noun) {
  return `${verb} ${noun}`;
}

function App() {
  return (
    <div className="App dt vh-100 w-100 bg-light-yellow">
      <div className="App__context dtc tc v-mid dib br3 pa3 ma2 grow font-effect-shadow-multiple">
        <div>
          <h1>Aleah is</h1>
          <h1>{whatIsSheDoing('Dreaming', 'about eating bulgogi')}</h1>
          <h1>But can't because she woke up</h1>
          <div className="App__image"></div>
        </div>
        <img src={logo} className="App__logo" alt="Wooleah logo"></img>
      </div>
    </div>
  );
}

export default App;
