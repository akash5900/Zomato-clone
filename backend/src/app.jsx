const express = require("express");
const cors = require("cors");

const userrouter = require("./routes/userRoutes");
const categorytabsrouter = require("./routes/categoryRoutes");
const collectionrouter = require("./routes/collectionRoutes");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);

app.use("/api/user", userrouter);
app.use("/api/restaurants", categorytabsrouter);
app.use("/api/collection", collectionrouter);

module.exports = app;
