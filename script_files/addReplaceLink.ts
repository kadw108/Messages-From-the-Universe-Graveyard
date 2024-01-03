/*
Syntax:

<a class="linkReplaced" identifier="test" >How awful.</a>
<p class="removedOnClick" identifier="test" >It sucks.</p>
<span class="linkReplacer hidden" identifier="test">How wonderful.</span>

*/

function clickReplaceLink(event) {
    const identifier = event.target.getAttribute("identifier");
    const replacers = document.querySelectorAll(".linkReplacer[identifier='" + identifier + "']");

    if (replacers.length === 0) {
        console.error("Replacelink without replacer!");
        console.error(event.target);
        return;
    }

    const removed = document.querySelectorAll(".removedOnClick[identifier='" + identifier + "']");
    removed.forEach(r => {
        r.classList.remove("hidden");
    })

    replacers.forEach(r => {
        r.classList.remove("hidden");
    })
}

export function addReplaceLink() {
    Array.from(document.getElementsByClassName("linkReplaced")).forEach(e => {
        e.addEventListener("click", clickReplaceLink);
    });
}