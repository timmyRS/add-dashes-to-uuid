console.time("test");
require("assert").strictEqual("e0603b59-2edc-45f7-acc7-b0cccd6656e1", require("./index.js")("e0603b592edc45f7acc7b0cccd6656e1"));
console.timeEnd("test");
// Yes that's right, there's no testing framework used except for nodejs built-ins.
