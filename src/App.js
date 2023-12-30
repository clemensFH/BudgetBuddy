import './styles.css';
import Navbar from '../src/components/Navbar.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1>BudgetBuddy Lets´s go SIIIUUUUU</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
