const log4js = require("log4js");
const config = require("../../config/log4js.config.js");

log4js.configure(config);

// Console logger
const console = log4js.getLogger();

// Application logger
const application = log4js.getLogger("application");

// Access logger
const access = log4js.getLogger("access");

module.exports = {
  console,
  application,
  access
};