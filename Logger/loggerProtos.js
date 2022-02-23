const BaseLoggerProto = {
  log(message) {
    console.log(message);
  },
};

const TableLoggerProto = Object.create(BaseLoggerProto);
TableLoggerProto.log = function (...messages) {
  BaseLoggerProto.log(messages.join(" | "));
};

const TableTimeLoggerProto = Object.create(TableLoggerProto);
TableTimeLoggerProto.log = function (...messages) {
  messages.unshift(
    new Date().toLocaleDateString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    })
  );
  TableLoggerProto.log(...messages);
};

const baseLogger = Object.create(BaseLoggerProto);
const tableLogger = Object.create(TableLoggerProto);
const tableTimerLogger = Object.create(TableTimeLoggerProto);

baseLogger.log("Hello World!");
tableLogger.log("Hello", "World", "!");
tableTimerLogger.log("Hello", "World", "!");
