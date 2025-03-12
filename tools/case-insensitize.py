# Since tree-sitter does not recognize "\\c" from nvim-treesitter,  this script is
# written to translate queries with "\\c" to use [aA] from instead

import sys
import string

path = sys.argv[1]

if path == "-":
    content = sys.stdin.read()
else:
    with open(path) as f:
        content = f.read()

new_content = ""
history = ""
in_string = False
case_insensitive = False

for c in content:
    match (c, in_string, case_insensitive, history):
        case ('"', False, _, _):
            in_string = True
            new_content += c
        case ('"', True, _, _):
            in_string = False
            case_insensitive = False
            new_content += c
        case ("\\", _, _, _):
            history += c
        case ("c", True, _, "\\\\"):
            case_insensitive = True
            history = ""
        case (_, _, _, "\\\\"):
            new_content += history
            new_content += c
            history = ""
        case (_, _, True, _) if c in string.ascii_letters:
            new_content += f"[{c.lower()}{c.upper()}]"
        case _:
            new_content += c

with open(path, "w") as f:
    f.write(new_content)
