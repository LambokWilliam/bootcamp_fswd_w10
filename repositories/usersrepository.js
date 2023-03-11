const Users = require('../models/users.js');

class UsersRepository {
  static findUsers = async (next) => {
    try {
      return Users.getUsers(next);
    } catch (err) {
      next(err);
    }
  };

  static findUserById = async (id, next) => {
    try {
      return Users.findUserById(id, next);
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (params, next) => {
    try {
      return Users.createUser(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateUser = async (id, params, next) => {
    try {
      return Users.updateUser(id, params, next);
    } catch (err) {
      next(err);
    }
  };

  static deleteUser = async (id, next) => {
    try {
      return Users.deleteUser(id, next);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UsersRepository;
