function BaseLogger() {}
BaseLogger.prototype.log = function (message) {
  console.log(message);
};

function TableLogger() {}
TableLogger.prototype = Object.create(BaseLogger.prototype);
TableLogger.prototype.constructor = TableLogger;
TableLogger.prototype.log = function (...messages) {
  BaseLogger.prototype.log(messages.join(" | "));
};

function TableTimeLogger() {}
TableTimeLogger.prototype = Object.create(TableLogger.prototype);
TableTimeLogger.prototype.constructor = TableTimeLogger;
TableTimeLogger.prototype.log = function (...messages) {
  messages.unshift(
    new Date().toLocaleDateString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    })
  );
  TableLogger.prototype.log(...messages);
};

const baseLogger = new BaseLogger();
baseLogger.log("Hello World!");

const tableLogger = new TableLogger();
tableLogger.log("Hello", "World", "!");

const tableTimerLogger = new TableTimeLogger();
tableTimerLogger.log("Hello", "World", "!");
