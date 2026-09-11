import './App.css';
import Task from './components/Task';
import Background from './assets/bg.jpg';

function App() {
  return (
      <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty dishwasher"/>
      <Task title="Laundry" deadline="Tomorrow"
        description="Fold laundry and put away."/>
      <Task title="Tidy" deadline="Today" description="Tidy Room"/>
    </div>

  );
}

export default App;
