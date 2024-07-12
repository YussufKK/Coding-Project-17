import React from 'react';
import './App.css';
import FancyText from './components/FancyText';
import TaskGenerator from './components/TaskGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FancyText title={true} text="Motivation App" />
      </header>
      <TaskGenerator />
      <footer className="App-footer">
        <p>Copyright © 2024 Yussuf Khojar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
