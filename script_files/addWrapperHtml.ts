// Adds wrapper HTML to snippet. Mimics Twine StoryInterface passage functionality.

/*
STRUCTURE BEFORE:

<div id="iff-story"> (added automatically by Iffinity)
    <div id="iff-snippet"> (added automatically by Iffinity; has actual contents of snippet)
        [SNIPPET CONTENTS]
    </div>
</div>

---

STRUCTURE AFTER:

<div id="iff-story"> (added automatically by Iffinity)

<div id="contents">
    <div id="bg"></div>
    <div id="passages"><div class="passage">
        <div id="screenBg"></div>

        <div id="screenContents" class="absoluteAlign">
            <div id="iff-snippet"> (added automatically by Iffinity; has actual contents of snippet)
                [SNIPPET CONTENTS]
            </div>
        </div>
    </div></div>
</div>

</div>

iff-story and iff-snippet are necessary; Iffinity won't work without them.

*/

export function addWrapperHtml() {
    if (document.getElementById("contents") === null) {
        const iffSnippet = document.getElementById("iff-snippet");
        if (iffSnippet === null) {
            console.error("iffSnippet is null");
            return;
        }
        iffSnippet.remove();

        const contents = document.createElement("div");
        contents.id = "contents";

        const bg = document.createElement("div");
        bg.id = "bg";
        contents.appendChild(bg);

        const passages = document.createElement("div");
        passages.id = "passages";
        contents.appendChild(passages);

        const passage = document.createElement("div");
        passage.classList.add("passage");
        passages.appendChild(passage);

        const screenBg = document.createElement("div");
        screenBg.id = "screenBg";
        passage.appendChild(screenBg);

        const screenContents = document.createElement("div");
        screenContents.id = "screenContents";
        screenContents.classList.add("absoluteAlign");
        passage.appendChild(screenContents);

        screenContents.appendChild(iffSnippet);
        document.getElementById("iff-story")?.appendChild(contents);
    }
}