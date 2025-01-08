import React from 'react';
import Status from './components/status/status';
import Options from './components/options/options';
import Body from './components/body/body';

import './App.css';

const App = () => {
  return (
    <div className="w-fill">
      <Options />
      <Body />
      <Status />
    </div>
  );
};

export default App;