import './styles.css';
import Navbar from '../src/components/Navbar.jsx'

function App() {
  return (
    <div className="bg-gray-100">
      <header className="App-header">
        <h1 className='py-2 text-2xl text-center text-green-700 bg-gray-100'>BudgetBuddy</h1>
        <Navbar />
        <p className='py-6 text-xl text-center'>
          Time to get working! :)
        </p>
      </header>
    </div>
  );
}

export default App;
