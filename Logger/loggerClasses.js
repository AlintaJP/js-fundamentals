class BaseLogger {
  log(message) {
    console.log(message);
  }
}

class TableLogger extends BaseLogger {
  log(...messages) {
    super.log(messages.join(" | "));
  }
}

class TableTimeLogger extends TableLogger {
  log(...messages) {
    messages.unshift(
      new Date().toLocaleDateString(undefined, {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      })
    );
    super.log(...messages);
  }
}

const baseLogger = new BaseLogger();
baseLogger.log("Hello World!");

const tableLogger = new TableLogger();
tableLogger.log("Hello", "World", "!");

const tableTimerLogger = new TableTimeLogger();
tableTimerLogger.log("Hello", "World", "!");
