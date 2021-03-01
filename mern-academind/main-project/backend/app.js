const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/user-routes");
const app = express();
const HttpError = require("./models/https-error");
app.use(bodyParser.json());

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);
// Special error handling middleware function.

app.use((req, res, next) => {
  const error = new HttpError("This route does not exist.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error ocurred!" });
});
app.listen(5000);
