const fs = require("fs");
const path = require("path");

let wasm;

if (typeof process === "object" && process.versions?.node) {
  // Node — export the wasm as a Buffer
  const wasmPath = path.resolve(__dirname, "./tree-sitter-cmake.wasm");
  wasm = fs.readFileSync(wasmPath);
} else {
  // Browser / Bundler / Deno
  const { pathToFileURL } = require("url");
  wasm = new URL("./tree-sitter-cmake.wasm", pathToFileURL(__filename)).href;
}

module.exports = wasm;
