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
        "You see graffiti of the number 416, scrawled messily onto a nearby wall with black spray paint.",
        "You see graffiti of the number 81818181, scrawled messily onto a nearby wall with gold spray paint.",
        "You see graffiti of the number 124, scrawled messily onto a nearby wall with red spray paint.",
        "Someone has scribbled the number 67 onto the wall with a black marker.",
        "A puddle of dark fluid has dried on the carpet here.",
        "Splotches of dark fluid have dried on the carpet here.",
        "You see a strange circular pattern graffitied onto a nearby wall.",
        "You see graffiti of several arrows pointing in different directions, scrawled onto a nearby wall.",
        "A blue dumpster sits before one of the support columns. It contains nothing.",
        "A cardboard box sits under a sagging spot in the ceiling.",
        "An empty trash can is lying on its side here.",
        "Pieces of metal litter the ground here. You cannot tell what they once belonged to.",
        "A plastic recycling bin sits under a sagging spot in the ceiling.",
        "A nonfunctional film camera, black and bulky, sits under a sagging spot in the ceiling.",
        "An empty sleeping bag lies on a cracked spot in the carpet.",
        "A plastic bag floats in the air here, suspended by an invisible force.",
        "A tattered white t-shirt lies in a crumpled pile here."
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