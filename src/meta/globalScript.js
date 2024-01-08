$(function () {
    window.crumblingcastle.addWrapperHtml();
    window.crumblingcastle.addReplaceLink();
    window.crumblingcastle.addMenuPanels();
    window.crumblingcastle.machine.editMachineDiv();

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

            menuButtons.innerHTML = '<button type="button" class="menuButton" id="inventoryButton">Inventory</button><button type="button" class="menuButton" id="mapButton">Skills</button><button type="button" class="menuButton" id="partyButton">Crafting</button>';
            const screenContents = document.getElementById("screenContents");
            if (screenContents !== null) {
                screenContents.appendChild(menuButtons);
            }
        }
    }

});