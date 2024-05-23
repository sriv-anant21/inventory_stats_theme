const express = require("express");
const cors = require("cors");
const authRouters = require("./routes/auth.route.js");
const userRouters = require("./routes/user.route.js");
const preferenceRouters = require("./routes/preference.route.js");

const app = express();

app.use(express.json()); //middleware
app.use(cors()); // to allow all URLs from frontend

app.get("/", (req, res) => {
  return res.status(200).send({ message: "welcome", status: true });
});

app.use("/auth", authRouters); // redirect all /auth to authRouters
app.use("/user", userRouters); // redirect all /user to userRouters
app.use("/preference",preferenceRouters); // redirect all /preference to preferenceRouters

module.exports = app;
