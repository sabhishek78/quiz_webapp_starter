import React from 'react';
import './App.css';
import Quiz from "./Quiz";
// - add overflow:hidden to 'header' class to avoid scrollbar when confetti is selected.
// - enable all questions, right now there are only 2
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Quiz/>
        </header>
      </div>
  );
}

export default App;
