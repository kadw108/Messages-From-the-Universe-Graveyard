import {randItem} from "./utility";

const sunkenHallSnippets = ["sunkenHall", "blackWormbed", "jellyFish", "kelpForest", "kelpGraveyard", "sunkenStatue", "treasurePile", "whiteWormbed", "underwaterMachines"];

export function addSunkenHallNav() {
    const swimUp = document.querySelector("p.swimUp");
    swimUp?.addEventListener("click", () => {
        // @ts-expect-error
        story.showSnippet("current");
    });

    const drift = document.querySelector("p.drift");
    drift?.addEventListener("click", () => {
        let newSnippet = randItem(sunkenHallSnippets);
        // @ts-expect-error
        while (newSnippet === snippet.name) {
            newSnippet = randItem(sunkenHallSnippets);
        }

        // @ts-expect-error
        story.transitionMessage = "The current takes you somewhere new.";

        // @ts-expect-error
        story.showSnippet(newSnippet);
    });
}