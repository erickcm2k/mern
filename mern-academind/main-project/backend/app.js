const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const app = express();
app.use(bodyParser.json());

app.use("/api/places", placesRoutes);
// Special error handling middleware function.
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error ocurred!" });
});
app.listen(5000);
