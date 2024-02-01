/*
Syntax:

<a class="linkReplaced" identifier="test" >Shows message on click.</a>
<a class="linkHider" identifier="test" >Hides message on click.</a>
<p class="removedOnClick" identifier="test" >Disappears when message is shown.</p>
<span class="linkReplacer hidden" identifier="test">Hidden text.</span>

<a class="linkReplaced removedOnClick" identifier="test" >Shows message on click.</a>
<span class="linkReplacer hidden" identifier="test"><a class="linkHider" identifier="test" >Hides message on click.</a>

Hidden text.</span>
*/

function clickReplaceLink(event) {
    const identifier = event.target.getAttribute("identifier");

    const replacers = document.querySelectorAll(".linkReplacer[identifier='" + identifier + "']");
    if (replacers.length === 0) {
        console.error("Replacelink without replacer! Identifier " + identifier);
        console.error(event.target);
        return;
    }
    replacers.forEach(r => {
        if (!r.classList.contains("hidden")) {
            return;
        }
        r.classList.remove("hidden");
    });

    const removed = document.querySelectorAll(".removedOnClick[identifier='" + identifier + "']");
    removed.forEach(r => {
        r.classList.add("hidden");
    });
}

function clickHideText(event) {
    const identifier = event.target.getAttribute("identifier");

    const replacers = document.querySelectorAll(".linkReplacer[identifier='" + identifier + "']");
    if (replacers.length === 0) {
        console.error("Replacelink without replacer! Identifier " + identifier);
        console.error(event.target);
        return;
    }
    replacers.forEach(r => {
        if (r.classList.contains("hidden")) {
            return;
        }
        r.classList.add("hidden");
    });

    const removed = document.querySelectorAll(".removedOnClick[identifier='" + identifier + "']");
    removed.forEach(r => {
        r.classList.remove("hidden");
    });
}

export function addReplaceLink() {
    Array.from(document.getElementsByClassName("linkReplaced")).forEach(e => {
        e.addEventListener("click", clickReplaceLink);
    });

    Array.from(document.getElementsByClassName("linkHider")).forEach(e => {
        e.addEventListener("click", clickHideText);
    });
}