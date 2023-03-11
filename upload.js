const express = require('express');
const router = express.Router();
const pool = require('./config/config.js');
const multer = require('multer');
const path = require('path');

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '/upload'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

router.use('/upload', express.static(path.join(__dirname, 'upload')));

router.post('/upload/:id/photo', multer({ storage: diskStorage }).single('photo'), (req, res) => {
  const file = req.file.path;
  const { id } = req.params;
  if (!file) {
    res.status(400).json({
      message: 'No file is selected',
    });
  } else {
    const updateMoviePhoto = `
        UPDATE movies
        SET photo = $1
        WHERE id = $2
    `;

    const photo = `http://localhost:3000/upload/${req.file.filename}`;

    pool.query(updateMoviePhoto, [photo, id], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json({
          message: 'File uploaded',
        });
      }
    });
  }
});

module.exports = router;
