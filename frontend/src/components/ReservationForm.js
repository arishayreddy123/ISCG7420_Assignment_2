import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function ReservationForm() {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    room: roomId,
    user: '',
    start_time: '',
    end_time: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/reservations/', form)
      .then(() => navigate('/'))
      .catch(err => console.error('Error creating reservation:', err));
  };

  return (
    <div className="container">
      <h1>Reserve Room</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="user"
            value={form.user}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Start Time</label>
          <input
            type="datetime-local"
            name="start_time"
            value={form.start_time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>End Time</label>
          <input
            type="datetime-local"
            name="end_time"
            value={form.end_time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
}
