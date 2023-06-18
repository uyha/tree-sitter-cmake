{
  "targets": [
    {
      "target_name": "tree_sitter_CMake_binding",
      "include_dirs": [
        "<!(node -e \"require('nan')\")",
        "src"
      ],
      "sources": [
        "bindings/node/binding.cc",
        "src/parser.c",
		"scanner.c",
      ],
      "cflags_c": [
        "-std=c99",
      ]
    }
  ]
}
