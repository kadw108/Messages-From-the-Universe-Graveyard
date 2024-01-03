$(function () {
    window.crumblingcastle.addWrapperHtml();
    window.crumblingcastle.addReplaceLink();
    window.crumblingcastle.addMenuPanels();
    window.crumblingcastle.addSunkenHallNav();

    const bottomHalf = document.querySelector("div.absoluteAlign.bottomHalf");
    if (story.transitionMessage !== null) {
        const message = document.createElement("p");
        message.classList.add("transitionMessage");
        message.innerText = story.transitionMessage;
        bottomHalf.prepend(message);
        story.transitionMessage = null;
    }
});