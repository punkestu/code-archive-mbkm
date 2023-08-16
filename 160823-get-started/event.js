const EventEmitter = require("events").EventEmitter;

const emitter = new EventEmitter();
emitter
  .on("some-event", function (...data) {
    console.log(data);
  })
  .on("some-event", function (data) {
    console.log(data);
  })
  .on("event2", function () {
    console.log("event2");
  });

emitter.emit("some-event", "hello world", "test");
emitter.emit("some-event", "test");
console.log(emitter.eventNames());
emitter.removeAllListeners("event2");
console.log(emitter.eventNames());