/*
Syntax:

<a class="panelOpener" identifier="test" >Click to make it show up!</a>
<div class="panelFull absoluteAlign hidden" identifier="test">How wonderful. I love my life.</div>

*/

function openMenuPanel(event) {
    const identifier = event.target.getAttribute("identifier");
    const replacer = document.querySelector(".panelFull[identifier='" + identifier + "']");

    if (replacer === null) {
        console.error("Replacelink without replacer!");
        console.error(event.target);
        return;
    }

    replacer.classList.remove("hidden");
}

function editMenuPanel(menuPanel) {
    const closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.type = "button";
    closeButton.classList.add("closeButton");
    closeButton.addEventListener("click", () => {
        menuPanel.classList.add("hidden");
    });

    menuPanel.prepend(closeButton);
}

export function addMenuPanels() {
    Array.from(document.getElementsByClassName("panelOpener")).forEach(e => {
        e.addEventListener("click", openMenuPanel);
    });

    Array.from(document.getElementsByClassName("panelFull")).forEach(e => {
        editMenuPanel(e);
    });
}