import React from 'react';
import './App.css';
import { appState } from './components/Counter';
import Counter from './components/CounterClass';
import CounterView from './components/CounterView';

const counter = new Counter();
const App: React.FC = () => {
  return (
    <div className="App">
      <CounterView store={appState} />
      <CounterView store={counter} />
    </div>
  );
};

export default App;
