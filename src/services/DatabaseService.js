let typeorm = require("typeorm");
let dbConfig = require("../config/db");
let connection;
const createConnection = async () => {
  if (!connection) {
    connection = await typeorm.createConnection(dbConfig);
  }
  return connection;
};
module.exports = {
  createConnection,
};
