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
  connectionString:
    "postgres://hpaphchrtmject:0a14e681827d5dcf10b20779e2378433257228684a59682c6bde88b631d05cf4@ec2-34-202-88-122.compute-1.amazonaws.com:5432/df5ifvmma45khk",
  ssl: { rejectUnauthorized: false },
};
//passing the url
const db = pg(postgresURL);

module.exports = db;
