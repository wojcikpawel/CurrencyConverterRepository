import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

const day = 'Saturday';



function App() {

  return (
    <div className="App">
      <p>Hello!!</p>
      <p>{day}</p>
     <Button label="Don't click me" color="blue"/>
     <Button label="Click me!" />
     <Button>Third button</Button>
    </div>
  );
}

export default App;