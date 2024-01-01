/*
Syntax:

<a class="replaceLink" replace="replaced" identifier="test" >How awful.</a>
<span class="replaceLink hidden" replace="replacer" identifier="test">How wonderful.</span>

*/

function clickReplaceLink(event) {
    const identifier = event.target.getAttribute("identifier");
    const replacers = document.querySelectorAll("[identifier='" + identifier + "'][replace='replacer']");

    if (replacers.length === 0) {
        console.error("Replacelink without replacer!");
        console.error(event.target);
        return;
    }

    event.target.classList.add("hidden");
    replacers.forEach(r => {
        r.classList.remove("hidden");
    })
}

export function addReplaceLink() {
    Array.from(document.querySelectorAll(".replaceLink[replace='replaced']")).forEach(e => {
        e.addEventListener("click", clickReplaceLink);
    });
}