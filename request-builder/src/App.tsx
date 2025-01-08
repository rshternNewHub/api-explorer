import React from 'react';
import MethodSelector from './components/methodSelector/methodSelector';
import Input from './components/input/input';
import AdditionalOptions from './components/additionalOptions/additionalOptions';
import Title from './components/title/title';

import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Title />
      <div className="request-builder w-fill">
        <MethodSelector/>
        <Input />
      </div>
      <div className="addOns">
        <AdditionalOptions />
      </div>
    </>
  );
};

export default App;