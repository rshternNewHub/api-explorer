import React from 'react';
import MethodSelector from './components/methodSelector/methodSelector';
import Input from './components/input/input';
import AdditionalOptions from './components/additionalOptions/additionalOptions';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <div className="request-builder w-fill">
        <MethodSelector/>
        <Input />
      </div>
      <div className="addOns">
        <AdditionalOptions />
      </div>
      <hr/>
    </>
  );
};

export default App;