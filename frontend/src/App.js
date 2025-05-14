import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoomList from './components/RoomList';
import ReservationForm from './components/ReservationForm';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/reserve/:roomId" element={<ReservationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
