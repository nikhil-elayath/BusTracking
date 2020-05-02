const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const db = require("./db-init/dbConn");
const error = require("./middlewares/error");

//importing the Router files
const onboarding = require("./routes/api/Onboarding");
const driverLocation = require("./routes/api/DriverLocation");

app.use(bodyParser.json());
app.use(cors());
app.disable("etag");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(logger("common"));
// using the router files
app.use("/api/onboarding/", onboarding);
app.use("/api/driver-location/", driverLocation);

const port = process.env.PORT || 5000;

app.use(error);

//creating the connection to the database
db.connect()
  .then((obj) => {
    obj.done(); // success, release connection;
    if (process.env.NODE_ENV !== "test")
      app.listen(port, () =>
        console.log(`Server is listening at http://localhost:${port}`)
      );
  })
  .catch((error) => {
    console.log("ERROR:", error.message);
  });

module.exports = app;
