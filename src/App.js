import './App.css';
import List from './components/list';

function App() {
  return (
    <div className='App'>
      <main className='container'>
        <div className="tasks">
            <h1>My Task;</h1>
            <List />
        </div>
      </main>
    </div>
  );
}

export default App;