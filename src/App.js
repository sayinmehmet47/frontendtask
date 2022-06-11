import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HistoryComponent from './pages/HistoryComponent';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<HistoryComponent />} />
      </Routes>
    </div>
  );
}
export default App;
