import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get('/api/rooms/')
      .then(res => setRooms(res.data))
      .catch(err => console.error('Error fetching rooms:', err));
  }, []);

  return (
    <div className="container">
      <h1>Available Rooms</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capacity</th>
            <th>Description</th>
            <th>Reserve</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.id}>
              <td>{room.name}</td>
              <td>{room.capacity}</td>
              <td>{room.description}</td>
              <td>
                <Link to={`/reserve/${room.id}`}>Reserve</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
