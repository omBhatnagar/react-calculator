import './App.css';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="App">
        <header>
        <h1>Simple React Calculator</h1>
        </header>
        <div className="calc-wrapper">
          <Calculator />
        </div>
        <footer>
          <h4>Made by Om Bhatnagar</h4>
        </footer>
    </div>
  );
}

export default App;
