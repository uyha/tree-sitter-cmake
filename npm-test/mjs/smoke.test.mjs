import test from 'node:test'
import assert from 'node:assert'

import { Parser, Language } from 'web-tree-sitter';

import cmake from '../../index.mjs'

await Parser.init();
const lang = await Language.load(cmake)

test('wasm grammar loads', async () => {
  assert.ok(lang);
});

test('can parse a simple file', async () => {
  const parser = new Parser();
  parser.setLanguage(lang)
  const tree = parser.parse('project(foo)');
  assert.equal(tree?.rootNode?.type, 'source_file');
});
