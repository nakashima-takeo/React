const PORT = process.env.PORT;
const path = require("path");
const logger = require("./lib/log/logger.js");
const applicationlogger = require("./lib/log/applicationlogger.js");
const accesslogger = require("./lib/log/accesslogger.js");
const express = require("express");
const favicon = require("serve-favicon");
const app = express();

// Express settings
app.set("view engine", "ejs");
app.disable("x-powered-by");

// Static resources routing
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
app.use("/public", express.static(path.join(__dirname, "/public")));

// Set access log
app.use(accesslogger());

// Dynamic resources routing
app.use("/", require("./routes/index.js"));
app.use("/test", async (req, res, next) => {
  const MySqlClient = require("./lib/database/client.js");
  try {
    const result = await MySqlClient.executeQuery("SELECT * FROM `users` where `id` = ?", [1]);
    console.log(result);
  } catch (err) {
    next(err);
  }

  res.render("test", {
    title: "Test",
    message: "Hello, World!"
  });
});

// Set application log
app.use(applicationlogger());

app.listen(PORT, () => {
  logger.application.info(`Example app listening at http://localhost:${PORT}`);
});