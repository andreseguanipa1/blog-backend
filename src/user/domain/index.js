const User = require('./model');

function single(attr) {
  return User.findOne(attr)
}

function all(attr) {
  return User.findAll(attr)
}

function create(attr) {
  return User.create(attr)
}

function up(attr, where) {
  return User.update(attr, where)
}


module.exports = {
  single,
  all,
  create,
  up
}
