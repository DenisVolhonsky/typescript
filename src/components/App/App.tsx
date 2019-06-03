import React from 'react';
import TestComponent from '../TestComponent/TestComponent';
import './App.css';

// The application use cinema API
// https://api.themoviedb.org

// const App: React.FC = () => {
const App = () => {  
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent data={'Test Component'} />
      </header>
    </div>
  );
}

export default App;
