import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';

const App = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>
        Toggle Timer
      </button>
    </div>
  );
};

export default App;