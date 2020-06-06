import React from 'react';
import './App.css';
import Applayout from './AppLayout';
import AppBar from './appBar/AppBar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings';

function App () {
  return (
    <Applayout>
      <AppProvider>
        <div className="App">
          <AppBar />
          <Settings />
        </div>
      </AppProvider>
    </Applayout>
  );
}

export default App;
