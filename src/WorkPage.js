// WorkPage.js
import Timer from './Timer';
import Dashboard from './Dashboard';
import './App.css';

function WorkPage({ userName }) {
  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <Timer />
      <Dashboard />
    </div>
  );
}

export default WorkPage;