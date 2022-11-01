const path = require("path");
const LOG_ROOT_DIR = process.env.LOG_ROOT_DIR || path.join(__dirname, "../logs");

module.exports = {
  appenders: {
    ConsolelogAppender: {
      type: "console"
    },
    ApplicationlogAppender: {
      type: "dateFile",
      filename: path.join(LOG_ROOT_DIR, "./application.log"),
      pattern: "-yyyy-MM-dd",
      numBackups: 3,
    },
    AccesslogAppender: {
      type: "dateFile",
      filename: path.join(LOG_ROOT_DIR, "./access.log"),
      pattern: "-yyyy-MM-dd",
      numBackups: 3,
    }
  },
  categories: {
    default: {
      appenders: ["ConsolelogAppender"],
      level: "ALL"
    },
    application: {
      appenders: ["ApplicationlogAppender",
        "ConsolelogAppender"],
      level: "INFO"
    },
    access: {
      appenders: ["AccesslogAppender",
        "ConsolelogAppender"],
      level: "INFO"
    }
  }
};