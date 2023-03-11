const Movies = require('../models/movies.js');

class MoviesRepository {
  static findMovies = async (next) => {
    try {
      return Movies.getMovies(next);
    } catch (err) {
      next(err);
    }
  };

  static findMovieById = async (id, next) => {
    try {
      return Movies.findMovieById(id, next);
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (params, next) => {
    try {
      return Movies.createMovie(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (id, params, next) => {
    try {
      return Movies.updateMovie(id, params, next);
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (id, next) => {
    try {
      return Movies.deleteMovie(id, next);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MoviesRepository;
