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
    "postgres://aimqijgpovdocl:90f1b3a77c6354a1798bef0efef93cea31689cdf9c9b3ca2e94ec6376ad0989a@ec2-50-17-21-170.compute-1.amazonaws.com:5432/d6hnuie8qovv9s",
  ssl: { rejectUnauthorized: false },
};
//passing the url
const db = pg(postgresURL);

module.exports = db;
