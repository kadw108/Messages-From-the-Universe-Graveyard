input_path = "/home/account/Documents/writ/if/shufflecomp/crumbling_castle/crumbling_castle_source/utility_files/messageListSource.txt"
output_path = "/home/account/Documents/writ/if/shufflecomp/crumbling_castle/crumbling_castle_source/utility_files/messageList.txt"

message_list = []

with open(input_path) as infile:
    obj = {}
    current_snippet = []
    skip_snippet = False
    skip_rest_of_snippet = False

    divider = "##### "

    for line in infile:

        if line.startswith(divider):
            if not skip_snippet:
                obj["message"] = "".join(current_snippet).strip()
                message_list.append(obj)

            obj = {}
            current_snippet = []
            skip_snippet = False
            skip_rest_of_snippet = False

            title_str = line[len(divider):]

            if title_str.startswith("[X]") or "[skip]" in title_str:
                skip_snippet = True

            else:
                colon_pos = title_str.index(": ")

                obj["author"] = title_str[colon_pos + 2:][:-1]
                obj["name"] = title_str[:colon_pos]

        else:
            if not skip_snippet and not skip_rest_of_snippet:
                if ("[X]" in line):
                    skip_rest_of_snippet = True
                else:
                    current_snippet.append(line)

message_list = message_list[1:]

with open(output_path, "w") as outfile:
    outfile.write("const messageList = " + str(message_list) + ";");
