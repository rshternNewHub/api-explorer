import React from 'react';
import NewRequest from './components/newRequest/newRequest';
import SearchCollections from './components/searchCollections/searchCollections';
import CollectionList from './components/collectionList/collectionList';
import RequestHistory from './components/history/history';
import Environments from './components/environments/environemnts';
import OptionsTab from './components/optionsTab/optionsTab';
import './App.css';

const App = () => {
  return (
    <div>
      <NewRequest />
      <SearchCollections />
      <OptionsTab />
      <CollectionList />
      <RequestHistory />
      <Environments />
    </div>
  );
};

export default App;