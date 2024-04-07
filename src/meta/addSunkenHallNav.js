const sunkenHallSnippets = ["sunkenHall", "blackWormbed", "jellyfish", "kelpForest", "kelpGraveyard", "submergedStatue", "treasurePile", "whiteWormbed", "underwaterMachines", "drownedApparatus"];

$(function () {
    const swimUp = document.querySelector("p.swimUp");
    swimUp?.addEventListener("click", () => {
        window.crumblingcastle.showSnippetWrapper("current");
    });

    const drift = document.querySelector("p.drift");
    drift?.addEventListener("click", () => {
        let newSnippet = window.crumblingcastle.randItem(sunkenHallSnippets);
        while (newSnippet === snippet.name) {
            newSnippet = window.crumblingcastle.randItem(sunkenHallSnippets);
        }

        story.transitionMessage = "You are taken somewhere new...";
        window.crumblingcastle.showSnippetWrapper(newSnippet);
    });
});