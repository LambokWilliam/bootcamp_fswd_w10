const MoviesService = require('../services/moviesservices');

class MoviesController {
  static findMovies = async (req, res, next) => {
    try {
      const { err, data } = await MoviesService.findMovies();

      if (err) {
        throw err;
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  };

  static findMovieById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { err, data } = await MoviesService.findMovieById(id);

      if (err) {
        throw err;
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (req, res, next) => {
    try {
      const { err, data } = await MoviesService.createMovie(req.body);

      if (err) {
        throw err;
      } else {
        res.status(201).json({
          message: 'Created Successfully',
          data,
        });
      }
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { err, data } = await MoviesService.updateMovie(id, req.body);

      if (err) {
        throw err;
      } else {
        res.status(200).json({
          message: 'Updated Successfully',
          data,
        });
      }
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { err, data } = await MoviesService.deleteMovie(id);

      if (err) {
        throw err;
      } else {
        res.status(200).json({
          message: 'Deleted Successfully',
          data,
        });
      }
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MoviesController;
