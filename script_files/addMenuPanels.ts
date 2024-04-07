/*
Syntax:

<a class="panelOpener" identifier="test" >Click to make it show up!</a>
<div class="menuPanel absoluteAlign hidden" identifier="test">How wonderful. I love my life.</div>

*/

function openMenuPanel(event) {
    const identifier = event.target.getAttribute("identifier");
    const replacer = document.querySelector(".menuPanel[identifier='" + identifier + "']");

    if (replacer === null) {
        console.error("Replacelink without replacer!");
        console.error(event.target);
        return;
    }

    replacer.classList.remove("hidden");

    const bg = document.getElementById("screenCover");
    if (bg === null) {
        return;
    }
    bg.style.zIndex = "19";
    bg.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

function editMenuPanel(menuPanel) {
    if (menuPanel.getAttribute("hasCloseButton") !== "true") {
        const closeButton = document.createElement("button");
        closeButton.innerText = "X";
        closeButton.type = "button";
        closeButton.classList.add("closeButton");
        closeButton.addEventListener("click", () => {
            menuPanel.classList.add("hidden");

            const bg = document.getElementById("screenCover");
            if (bg === null) {
                return;
            }
            bg.style.zIndex = "-1";
        });

        menuPanel.prepend(closeButton);

        menuPanel.setAttribute("hasCloseButton", "true");
    }
}

export function addMenuPanels() {
    Array.from(document.getElementsByClassName("panelOpener")).forEach(e => {
        e.addEventListener("click", openMenuPanel);
    });

    Array.from(document.getElementsByClassName("menuPanel")).forEach(e => {
        editMenuPanel(e);
    });
}