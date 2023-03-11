const pool = require('../config/config.js');

class Users {
  static getUsers = async () => {
    const findQuery = `
            SELECT * FROM users
    `;

    try {
      const data = await pool.query(findQuery);
      return { err: null, data: data.rows };
    } catch (err) {
      return { err, data: null };
    }
  };

  static findUserById = async (id) => {
    const findQuery = `
        SELECT * FROM users
        WHERE id = $1
    `;

    try {
      const data = await pool.query(findQuery, [id]);
      if (data.rows.length === 0) {
        throw { name: 'ErrorNotFound' };
      } else {
        return { err: null, data: data.rows[0] };
      }
    } catch (err) {
      return { err, data: null };
    }
  };

  static createUser = async (params) => {
    const insertQuery = `
        INSERT INTO users (email, gender, password, role)
            VALUES
                ($1, $2, $3, $4)
        RETURNING *
    `;

    try {
      const { email, gender, password, role } = params;
      const data = await pool.query(insertQuery, [email, gender, password, role]);
      return { err: null, data: data.rows[0] };
    } catch (err) {
      return { err, data: null };
    }
  };

  static updateUser = async (id, params) => {
    const updateQuery = `
        UPDATE users
        SET email = $1,
            gender = $2,
            password = $3,
            role = $4
        WHERE id = $5
        RETURNING *
    `;

    try {
      const { email, gender, password, role } = params;
      const data = await pool.query(updateQuery, [email, gender, password, role, id]);
      if (data.rows.length === 0) {
        throw { name: 'ErrorNotFound' };
      } else {
        return { err: null, data: data.rows[0] };
      }
    } catch (err) {
      return { err, data: null };
    }
  };

  static deleteUser = async (id) => {
    const deleteQuery = `
        DELETE FROM users
        WHERE id = $1
        RETURNING *
    `;

    try {
      const data = await pool.query(deleteQuery, [id]);
      if (data.rows.length === 0) {
        throw { name: 'ErrorNotFound' };
      } else {
        return { err: null, data: data.rows[0] };
      }
    } catch (err) {
      return { err, data: null };
    }
  };
}

module.exports = Users;
