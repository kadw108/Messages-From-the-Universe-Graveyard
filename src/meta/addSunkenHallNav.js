const sunkenHallSnippets = ["sunkenHall", "blackWormbed", "jellyfish", "kelpForest", "kelpGraveyard", "sunkenStatue", "treasurePile", "whiteWormbed", "underwaterMachines", "drownedApparatus"];

$(function () {
    const swimUp = document.querySelector("p.swimUp");
    swimUp?.addEventListener("click", () => {
        story.showSnippet("current");
    });

    const drift = document.querySelector("p.drift");
    drift?.addEventListener("click", () => {
        let newSnippet = window.crumblingcastle.randItem(sunkenHallSnippets);
        while (newSnippet === snippet.name) {
            newSnippet = window.crumblingcastle.randItem(sunkenHallSnippets);
        }

        story.transitionMessage = "You are taken somewhere else...";
        story.showSnippet(newSnippet);
    });
});