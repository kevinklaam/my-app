import logo from './logo.svg';
import {useState} from "react";
import './App.css';

function App() {

  //const count = useState(0);
  const [count, setCout] = useState(0);
  const increment = () => {
    setCout(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Kevin {count}
        </a>
        <button onClick={increment}>THIS IS A BUTTON</button>
      </header>
    </div>
  );
}

export default App;
