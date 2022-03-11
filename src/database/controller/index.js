const Database = require('../domain');
require('../domain/relations');

// sync
async function init() {
  try {
    await Database.sync({ alter: true})
    console.log(`Base de datos conectada`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = init;