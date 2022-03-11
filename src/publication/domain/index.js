 const Publication = require('./model');
 
function single(attr) {
  return Publication.findOne(attr)
}

function all(attr) {
  return Publication.findAll(attr)
}

function create(attr) {
  return Publication.create(attr)
}


module.exports = {
  single,
  all,
  create
}
