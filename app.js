const express = require('express');
const app = express();
const errorHandler = require('./middlewares/errorHandler.js');
const router = require('./routes');
const uploadRouter = require('./upload.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(uploadRouter);
app.use(router);
app.use(errorHandler);

app.listen(3000);
