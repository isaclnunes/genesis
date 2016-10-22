import React from 'react';

import Greeting from '../Greeting/Greeting';
import './App.scss';

const App = () => {
  return (
    <div className="app-container">
      <h2>Tiago&apos;s React Starter Kit</h2>
      <Greeting name="Tiago!" />
    </div>
  );
};

export default App;
