import './App.css';
import {useState} from 'react';

function App() {
  const [state, setState] = useState(true);
  const [currentCount, setCurrentCount] = useState(0)
  return (
    <div className="App">
      <h1 className='headind'>A simple app for testing</h1>
      <button id='control-btn' onClick = {() => setState(prev => !prev)} style={{backgroundColor: state ? "green" : "red"}} >toggle text</button>
      {state && <p className='controlled-text'>this text display status is dependent on the app state</p>}
      <button id='increment' onClick = {() => setCurrentCount(prev => prev + 1)} >+</button>
      <button id='decrement' { ...currentCount > 0 && { onClick: () => {setCurrentCount(prev => prev - 1)} } } >-</button>
      <p id='count'>{currentCount}</p>
    </div>
  );
}

export default App;
