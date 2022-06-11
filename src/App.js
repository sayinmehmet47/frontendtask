import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HistoryComponent from './pages/HistoryComponent';
import Home from './pages/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<HistoryComponent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
