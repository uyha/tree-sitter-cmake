const test = require('node:test');
const assert = require('node:assert');

const { Parser, Language } = require('web-tree-sitter');

const cmake = require('../../index.cjs');

let lang;

test.before(async () => {
  await Parser.init();
  lang = await Language.load(cmake);
});

test('wasm grammar loads', async () => {
  assert.ok(lang);
});

test('can parse a simple file', async () => {
  const parser = new Parser();
  parser.setLanguage(lang)
  const tree = parser.parse('project(foo)');
  assert.equal(tree?.rootNode?.type, 'source_file');
});
