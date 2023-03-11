const pool = require('../config/config.js');

class Movies {
  static getMovies = async () => {
    const findQuery = `
            SELECT * FROM movies
    `;

    try {
      const data = await pool.query(findQuery);
      return { err: null, data: data.rows };
    } catch (err) {
      return { err, data: null };
    }
  };

  static findMovieById = async (id) => {
    const findQuery = `
        SELECT * FROM movies
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

  static createMovie = async (params) => {
    const insertQuery = `
        INSERT INTO movies (title, genres, year)
            VALUES
                ($1, $2, $3)
        RETURNING *
    `;

    try {
      const { title, genres, year } = params;
      const data = await pool.query(insertQuery, [title, genres, year]);
      return { err: null, data: data.rows[0] };
    } catch (err) {
      return { err, data: null };
    }
  };

  static updateMovie = async (id, params) => {
    const updateQuery = `
        UPDATE movies
        SET title = $1,
            genres = $2,
            year = $3
        WHERE id = $4
        RETURNING *
    `;

    try {
      const { title, genres, year } = params;
      const data = await pool.query(updateQuery, [title, genres, year, id]);
      if (data.rows.length === 0) {
        throw { name: 'ErrorNotFound' };
      } else {
        return { err: null, data: data.rows[0] };
      }
    } catch (err) {
      return { err, data: null };
    }
  };

  static deleteMovie = async (id) => {
    const deleteQuery = `
        DELETE FROM movies
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

module.exports = Movies;
