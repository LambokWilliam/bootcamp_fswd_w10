const UsersRepository = require('../repositories/usersrepository.js');

class UsersService {
  static findUsers = async (next) => {
    try {
      return UsersRepository.findUsers(next);
    } catch (err) {
      next(err);
    }
  };

  static findUserById = async (id, next) => {
    try {
      return UsersRepository.findUserById(id, next);
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (params, next) => {
    try {
      return UsersRepository.createUser(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateUser = async (id, params, next) => {
    try {
      return UsersRepository.updateUser(id, params, next);
    } catch (err) {
      next(err);
    }
  };

  static deleteUser = async (id, next) => {
    try {
      return UsersRepository.deleteUser(id, next);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UsersService;
