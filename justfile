release version:
  tree-sitter generate --abi 14
  tree-sitter version {{version}}
  git commit -am "chore(release): v{{version}}"
  git tag v{{version}}
