const MoviesRepository = require('../repositories/moviesrepository.js');

class MoviesService {
  static findMovies = async (next) => {
    try {
      return MoviesRepository.findMovies(next);
    } catch (err) {
      next(err);
    }
  };

  static findMovieById = async (id, next) => {
    try {
      return MoviesRepository.findMovieById(id, next);
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (params, next) => {
    try {
      return MoviesRepository.createMovie(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (id, params, next) => {
    try {
      return MoviesRepository.updateMovie(id, params, next);
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (id, next) => {
    try {
      return MoviesRepository.deleteMovie(id, next);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MoviesService;
