## [Play Here](https://kanderwund.itch.io/messages)

Contains source code for Messages From the Universe Graveyard, an interactive fiction game originally made for [Shufflecomp 2023](https://itch.io/jam/shufflecomp-2023).

The game was made with <a href="https://github.com/zehanort/iffinity">iffinity</a>, a Tweego-like interactive fiction engine by Sotiris Niarchos.

Needed but not included in the repository due to being build outputs:

* export/index.html
* src/meta/crumblingcastle.js

They are generated with `build`. The files in `src` are the actual source code of the final iffinity project, while the files in `script_files` get compiled by `build` into `src/meta/crumblingcastle.js`, which is loaded into the final project (as a story script).

Image and audio assets aren't included in the repo since they'd make it unnecessarily large, but they come with the downloaded version of the game you can get on Itch.

**In other words, `build` takes all the changes you've made to the source and applies them to the new index.html output. Open index.html after running `build` to see the new version of the frontend.**