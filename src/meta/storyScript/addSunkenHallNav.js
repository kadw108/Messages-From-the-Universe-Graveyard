const sunkenHallSnippets = ["sunkenHall", "blackWormbed", "jellyFish", "kelpForest", "kelpGraveyard", "sunkenStatue", "treasurePile", "whiteWormbed", "underwaterMachines", "drownedApparatus"];

f.addSunkenHallNav = function() {
    const swimUp = document.querySelector("p.swimUp");
    swimUp?.addEventListener("click", () => {
        story.showSnippet("current");
    });

    const drift = document.querySelector("p.drift");
    drift?.addEventListener("click", () => {
        let newSnippet = window.crumblingcastle.randItem(sunkenHallSnippets);
        while (newSnippet === f.getSnippet().name) {
            newSnippet = randItem(sunkenHallSnippets);
        }

        story.transitionMessage = "You are taken somewhere else...";
        story.showSnippet(newSnippet);
    });
}