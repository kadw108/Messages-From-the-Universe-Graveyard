import os

input_path = "/home/account/Documents/writ/if/shufflecomp/crumbling_castle/crumbling_castle_source/src/world"
input_path2 = "/home/account/Documents/writ/if/shufflecomp/crumbling_castle/crumbling_castle_source/src/world/minor"

filenames = sorted([input_path+"/"+i for i in os.listdir(input_path) if i.endswith(".ejs")])
filenames += [input_path2+"/"+i for i in os.listdir(input_path2) if i.endswith(".ejs")]

output_path = "/home/account/Documents/writ/if/shufflecomp/crumbling_castle/proof.html"
output_path2 = "/home/account/Documents/writ/if/shufflecomp/crumbling_castle/index.txt"

board_map = {}

with open(output_path, 'w') as outfile:
    for fname in filenames:
        with open(fname) as infile:

            outfile.write("<h1>##" + fname[len(input_path)+1:] + "</h1>")

            current_snippet = []
            snippet_name = ""
            board_num = "NA"

            for line in infile:

                if 'h3 class="roomName"' in line:
                    tag_end = line.index('>') + 1
                    title_end = line.index('</h3>')
                    snippet_name = line[tag_end:title_end]

                if 'board="' in line:
                    board_start = line.index('board="') + len('board="') 

                    board_num = []
                    for c in line[board_start:]:
                        if c == '"':
                            break
                        board_num.append(c)
                    board_num = "".join(board_num)
                    room = board_map.get(int(board_num))
                    if room != None:
                        print("DUPLICATE BOARD NUM: " + board_num + " SNIPPETS: ", snippet_name, room)
                    board_map[int(board_num)] = snippet_name

                current_snippet.append(line)

                if '</snippet>' in line:
                    outfile.write("<br/>")
                    outfile.write("##### {" + board_num + "} " + snippet_name)
                    outfile.write("".join(current_snippet))
                    current_snippet = []
                    snippet_name = ""

"""
with open(output_path2, "w") as outfile:
    with open(output_path) as infile:
        for line in infile:
            try:
                start = line.index(">") + 1
                if line[start:].startswith("#"):
                    outfile.write(line[start:])
            except ValueError:
                continue
"""

for i in sorted(board_map.keys()):
    print(i, ":", board_map[i])
