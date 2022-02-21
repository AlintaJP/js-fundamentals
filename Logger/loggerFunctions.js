const logMessage = (message) => {
  console.log(message);
};

const logMessageTable = (...messages) => {
  logMessage.call(null, messages.join(" | "));
};

const logMessageTableDate = (...messages) => {
  messages.unshift(
    new Date().toLocaleDateString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    })
  );
  logMessageTable.call(null, ...messages);
};

logMessage("Hello World!");
logMessageTable("Hello", "World", "!");
logMessageTableDate("Hello", "World", "!");
