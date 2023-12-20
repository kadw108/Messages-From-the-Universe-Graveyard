let markerOpened = false;

function openMarker(event) {
    document.getElementById("markerDiv").classList.remove("hidden");
    if (!markerOpened) {
        markerOpened = true;

        boardNumber = Number(event.target.getAttribute("board"));
        const ref = window.crumblingcastle;
        ref.getBoard(boardNumber);
    }
}

function closeMarker() {
    document.getElementById("markerDiv").classList.add("hidden");
}

function createMarkerDiv() {
    const markerDiv = document.createElement("div");
    markerDiv.id = "markerDiv";
    markerDiv.classList.add("absoluteAlign", "hidden");

    const pageLinkContainer = document.createElement("div");
    pageLinkContainer.classList.add("pageLinkContainer");
    pageLinkContainer.innerHTML = "<ul><li class='pageLink'>1</li></ul><a>Next Page</a>";

    const closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.type = "button";
    closeButton.id = "closeMarkerDiv";
    closeButton.addEventListener("click", closeMarker);

    const messageContainer = document.createElement("div");
    messageContainer.id = "messageContainer";
    messageContainer.innerHTML = "<img src='assets/loading.gif'/>";

    const sendBox = document.createElement("form");
    sendBox.classList.add("sendBox");
    sendBox.innerHTML = '<h6>Leave a Message?</h6><div><label for="nameInput">Name</label><input type="text" id="nameInput"></div><div><label for="messageInput">Message</label><textarea id="messageInput" rows="10"></textarea></div><button type="submit">Send</button>';

    markerDiv.append(pageLinkContainer, closeButton, messageContainer, sendBox);
    return markerDiv;
}

$(function () {
    Array.from(document.getElementsByClassName("whiteMarker")).forEach(e => {
        e.addEventListener("click", openMarker);
    });

    const markerDiv = createMarkerDiv();
    document.getElementById("iff-snippet").prepend(markerDiv);
});