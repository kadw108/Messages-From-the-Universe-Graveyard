$(function () {
    window.crumblingcastle.addWrapperHtml();

    const bottomHalf = document.querySelector("div.absoluteAlign.bottomHalf");
    if (story.transitionMessage !== null) {
        const message = document.createElement("p");
        message.classList.add("transitionMessage");
        message.innerText = story.transitionMessage;
        bottomHalf.prepend(message);
        story.transitionMessage = null;
    }

    /*
    <div class="menuButtons blackBg2">
        <button type="button" class="menuButton" id="inventoryButton">Inventory</button>
        <button type="button" class="menuButton" id="mapButton">Map</button>
        <button type="button" class="menuButton" id="partyButton">Party</button>
    </div>
    */

    if (!snippet.tags.includes("menu") && !snippet.tags.includes("transition")) {
        const buttonTest = document.querySelector("div.menuButtons");
        if (buttonTest === null) {
            const menuButtons = document.createElement("div");
            menuButtons.classList.add("menuButtons", "blackBg2");

            // menuButtons.innerHTML = '<button type="button" class="menuButton" id="inventoryButton">Inventory</button><button type="button" class="menuButton" id="mapButton">Skills</button><button type="button" class="menuButton" id="partyButton">Crafting</button>';
            menuButtons.innerHTML = '<button type="button" class="menuButton panelOpener" id="startButton" identifier="startMenu">Start</button>';

            const startMenu = document.createElement("div");
            startMenu.classList.add("panelFull", "absoluteAlign", "hidden");
            startMenu.setAttribute("identifier", "startMenu");
            startMenu.innerHTML = '<p>Return to start menu? This will reset your location. Codes and messages will remain.</p> <br/> <p><a id="returnLink">Return.</a></p>';

            const screenContents = document.getElementById("screenContents");
            if (screenContents !== null && snippet.name != "begin") {
                screenContents.appendChild(menuButtons);
                screenContents.appendChild(startMenu);

                const returnLink = document.getElementById("returnLink");
                returnLink.addEventListener("click", () => {
                    startMenu.remove();
                    menuButtons.remove();
                    story.showSnippet("begin");
                })
            }
        }
    }

    window.crumblingcastle.addReplaceLink();
    window.crumblingcastle.addMenuPanels();
    window.crumblingcastle.machine.editMachineDiv();
});