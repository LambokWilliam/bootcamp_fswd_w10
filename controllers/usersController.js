const UsersService = require('../services/usersservices');

class UsersController {
  static findUsers = async (req, res, next) => {
    try {
      const { err, data } = await UsersService.findUsers();

      if (err) {
        throw err;
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  };

  static findUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { err, data } = await UsersService.findUserById(id);

      if (err) {
        throw err;
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (req, res, next) => {
    try {
      const { err, data } = await UsersService.createUser(req.body);

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

  static updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { err, data } = await UsersService.updateUser(id, req.body);

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

  static deleteUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { err, data } = await UsersService.deleteUser(id);

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

module.exports = UsersController;
