const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/user-routes");
const app = express();
const HttpError = require("./models/https-error");
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
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

const mongoURL =
  "mongodb+srv://erick:gpRfQfuUBxK0e2SZ@cluster0.f43r0.mongodb.net/mern?retryWrites=true&w=majority";
mongoose
  .connect(mongoURL, {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(5000);
    console.log("Server running on port 5000.");
  })
  .catch((error) => {
    console.log(error);
  });
