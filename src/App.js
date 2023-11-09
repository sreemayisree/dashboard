// App.js
import { useState } from 'react';
import WorkPage from './WorkPage';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [isWorking, setIsWorking] = useState(false);

  const startWork = () => {
    setIsWorking(true);
  };

  return (
    <div className="App">
      {isWorking ? (
        <WorkPage userName={userName} />
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={startWork}>Start Work</button>
        </div>
      )}
    </div>
  );
}
export default App;
