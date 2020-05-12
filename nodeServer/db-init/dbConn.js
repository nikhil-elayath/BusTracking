var options = {
  error: (error, e) => {
    if (e.cn) {
      // A connection-related error;
      console.log("CN:", e.cn);
      console.log("EVENT:", error.message);
    }
  },
};
const pg = require("pg-promise")(options);
const config = require("config");

//getting the postgres url which is stored in the environment variable
const postgresURL = {
  connectionString: "postgres://postgres:root@localhost:5432/bus_tracking",
  // ssl: { rejectUnauthorized: false },
};
//passing the url
const db = pg(postgresURL);

module.exports = db;
