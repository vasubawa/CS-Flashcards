import React, { useState } from 'react';
import './App.css';
import CardSetInfo from './components/CardSetInfo';
import Flashcards from './components/Flashcards';

function App() {
  return (
    <div className="app">
      <Flashcards />
    </div>
  );
}

export default App;