const pool = require("./pool.js");
const MySQLClient = {
  executeQuery: async function (query, values) {
    var results = await pool.executeQuery(query, values);
    return results;
  }
};

module.exports = {
  MySQLClient,
};
