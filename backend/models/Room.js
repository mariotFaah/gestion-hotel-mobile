// models/Room.js
const pool = require('../config/db');

const Room = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM rooms');
    return rows;
  },

  create: async (roomData) => {
    const { name, price, capacity } = roomData;
    const [result] = await pool.query(
      'INSERT INTO rooms (name, price, capacity) VALUES (?, ?, ?)',
      [name, price, capacity]
    );
    return result.insertId;
  }
};

module.exports = Room;
