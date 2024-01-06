const genFamiliarFlavorText = function() {
    const source0 = [
        "Everything looks the same.",
        "Everything looks the same. You can barely tell you've moved at all.",
        "You see nothing of note.",
        "No matter where you go, there is only more carpet, more buzzing lights.",
        "Nothing of interest here.",
        "You see nothing interesting.",
        "This place looks the same as the place you were in before.",
        "You see nothing new."
    ];

    const source1 = [
        "One of the lights here flickers slightly. Besides that, you see nothing new.",
        "A small puddle of something dark has dried on the carpet. It could be water.",
        "You see graffiti of several eyes looking in different directions, scrawled onto a nearby wall.",
        "Dark fluid has dried on the carpet here, forming a perfectly round circle.",
        "You see a pyramid scrawled onto a nearby wall with black marker.",
        "You see a strange circular pattern graffitied onto a nearby wall.",
        "You see graffiti of several arrows pointing in different directions, scrawled onto a nearby wall.",
        "A blue dumpster sits before one of the support columns. It contains nothing.",
        "A cardboard box sits under a sagging spot in the ceiling.",
        "An empty trash can is lying on its side here.",
        "A broken camera sits under a sagging spot in the ceiling.",
        "A plastic recycling bin sits under a sagging spot in the ceiling.",
        "A plastic flower sits under a sagging spot in the ceiling.",
        "An empty sleeping bag sits under a sagging spot in the ceiling.",
        "A tattered white t-shirt sits under a sagging spot in the ceiling.",
    ];

    $(function () {
        const randomValue = Math.random() * 100;
        const flavor = document.createElement("p");
        if (randomValue < 20) {
            flavor.innerText = window.crumblingcastle.randItem(source1);
            document.getElementById("familiarFlavorText").append(flavor);
        }
        else if (randomValue < 95) {
            flavor.innerText = window.crumblingcastle.randItem(source0);
            document.getElementById("familiarFlavorText").append(flavor);
        }
    });
}

$(function () {
    const wander = document.querySelector("a.familiarPlaceNav");
    wander?.addEventListener("click", () => {
        let newSnippet = "familiarPlaceDefault";
        const randomValue = Math.random() * 100;
        if (randomValue < 15 && snippet.name !== "familiarPlaceApparatus") {
            newSnippet = "familiarPlaceApparatus";
        }
        else if (randomValue < 30 && snippet.name !== "familiarPlacePanel") {
            newSnippet = "familiarPlacePanel";
        }

        story.showSnippet(newSnippet);
    });
});