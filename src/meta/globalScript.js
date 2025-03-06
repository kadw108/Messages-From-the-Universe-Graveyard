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

        // save location even if site is closed and revisited
        try {
            localStorage.setItem("kadw_graveyard_location", snippet.name);
            // console.log("location set (localStorage): " + snippet.name);
        } catch (error) { // e.g. localStorage access is turned off in browser settings
        }
        // save location to return to it after start menu is accessed
        // separate from localStorage save
        s.current_location = snippet.name;
        // console.log("location set (s): " + s.current_location);

        // add menu buttons
        const buttonTest = document.querySelector("div.menuButtons");
        if (buttonTest === null) {
            const menuButtons = document.createElement("div");
            menuButtons.classList.add("menuButtons", "blackBg2");

            menuButtons.innerHTML = '<button type="button" class="menuButton panelOpener" id="startButton" identifier="startMenu">Start</button>';

            const startMenu = document.createElement("dialog");
            startMenu.classList.add("menuPanel", "smallPanel", "absoluteAlign");
            startMenu.setAttribute("identifier", "startMenu");
            startMenu.innerHTML = '<p>Return to start menu? Codes will remain unchanged, and messages will persist. This will not reset your location.</p> <br/><button type="button" id="returnLink">Return.</button>';

            const screenContents = document.getElementById("screenContents");
            if (screenContents !== null && snippet.name != "begin") {
                screenContents.appendChild(menuButtons);
                screenContents.appendChild(startMenu);

                const returnLink = document.getElementById("returnLink");
                returnLink.addEventListener("click", () => {
                    startMenu.remove();
                    menuButtons.remove();

                    window.crumblingcastle.showSnippetWrapper("begin");
                })
            }
        }
    }

    window.crumblingcastle.addReplaceLink();
    window.crumblingcastle.addMenuPanels();
    window.crumblingcastle.machine.editMachineDiv();

    window.crumblingcastle.musicManager.playSoundtrack(snippet.tags);
});