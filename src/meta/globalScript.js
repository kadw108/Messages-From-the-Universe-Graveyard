$(function () {
    window.crumblingcastle.addWrapperHtml();
    window.crumblingcastle.addReplaceLink();
    window.crumblingcastle.addMenuPanels();
    f.addSunkenHallNav();

    const bottomHalf = document.querySelector("div.absoluteAlign.bottomHalf");
    if (s.transitionMessage !== null) {
        const message = document.createElement("p");
        message.classList.add("transitionMessage");
        message.innerText = s.transitionMessage;
        bottomHalf.prepend(message);
        s.transitionMessage = null;
    }
});