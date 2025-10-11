let wasm;

if (typeof process === "object" && process.versions?.node) {
  // Node - export the wasm as a buffer
  const { readFileSync } = await import("node:fs");
  const { fileURLToPath } = await import("node:url");
  const { dirname, resolve } = await import("node:path");

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const wasmPath = resolve(__dirname, "./tree-sitter-cmake.wasm");

  wasm = readFileSync(wasmPath);
} else {
  // Browser / Bundler / Deno
  wasm = new URL("./tree-sitter-cmake.wasm", import.meta.url).href;
}

export { wasm };
export default wasm;
