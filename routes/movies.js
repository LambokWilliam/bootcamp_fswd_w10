const express = require('express');
const router = express.Router();
const MoviesController = require('../controllers/moviesController.js');

router.get('/movies', MoviesController.findMovies);
router.get('/movies/:id', MoviesController.findMovieById);
router.post('/movies', MoviesController.createMovie);
router.put('/movies/:id', MoviesController.updateMovie);
router.delete('/movies/:id', MoviesController.deleteMovie);

module.exports = router;
