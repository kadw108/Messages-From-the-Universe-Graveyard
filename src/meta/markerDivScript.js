let markerOpened = false;

async function openMarker(event) {
    document.getElementById("markerDiv").classList.remove("hidden");
    if (!markerOpened) {
        markerOpened = true;

        boardNumber = Number(event.target.getAttribute("board"));
        const ref = window.crumblingcastle;
        await ref.getBoard(boardNumber);

        document.getElementById("loadingDiv")?.classList.add("hidden");
        document.getElementById("fetchedInfoDiv")?.classList.remove("hidden");
    }
}

function closeMarker() {
    document.getElementById("markerDiv").classList.add("hidden");
}

async function refresh(event) {
    event.target.innerHTML = "<img src='assets/loading.gif' style='width: 18px;'/>";
    event.target.disabled = true;

    const ref = window.crumblingcastle;
    const refreshNumber = Number(document.getElementsByClassName("whiteMarker")[0].getAttribute("board"));
    await ref.getBoard(refreshNumber);

    event.target.innerHTML = "Refresh";
    event.target.disabled = false;
}

function showHideSendBox(event) {
    if (event.target.innerText === "Hide") {
        event.target.innerText = "Leave a Message?";
        event.target.style.borderBottom = "1px solid #aaa";
        document.getElementById("sendBox").classList.add("hidden");
    }
    else {
        event.target.innerText = "Hide";
        event.target.style.borderBottom = "none";
        document.getElementById("sendBox").classList.remove("hidden");
    }
}

function createMarkerDiv() {
    const markerDiv = document.createElement("div");
    markerDiv.id = "markerDiv";
    markerDiv.classList.add("absoluteAlign", "hidden");

    const closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.type = "button";
    closeButton.id = "closeMarkerDiv";
    closeButton.addEventListener("click", closeMarker);

    const loadingDiv = document.createElement("div");
    loadingDiv.id = "loadingDiv";
    loadingDiv.innerHTML = "<img src='assets/loading.gif'/>";

    markerDiv.append(closeButton, loadingDiv, createFetchedInfoDiv());
    return markerDiv;
}

function createFetchedInfoDiv() {
    const fetchedInfoDiv = document.createElement("div");
    fetchedInfoDiv.id = "fetchedInfoDiv";
    fetchedInfoDiv.classList.add("hidden");

    const pageLinkContainer = document.createElement("div");
    pageLinkContainer.classList.add("pageLinkContainer");
    pageLinkContainer.innerHTML = "<ul><li>1</li></ul><a>Next Page</a>";

    const refreshButton = document.createElement("button");
    refreshButton.id = "refreshButton";
    refreshButton.innerText = "Refresh";
    refreshButton.addEventListener("click", refresh);

    const messageContainer = document.createElement("div");
    messageContainer.id = "messageContainer";

    const sendBoxButton = document.createElement("button");
    sendBoxButton.id = "sendBoxButton";
    sendBoxButton.innerText = "Leave a Message?";
    sendBoxButton.addEventListener("click", showHideSendBox);

    const sendBox = document.createElement("form");
    sendBox.id = "sendBox";
    sendBox.classList.add("hidden");
    sendBox.innerHTML = '<h6>Leave a Message?</h6><div><label for="nameInput">Name<small>  [3-32 characters, alphanumeric only]</small></label><input type="text" maxlength=32 minlength=3 pattern="[a-zA-Z0-9]+" id="nameInput" "Alphanumeric name from 3 to 32 characters."></div><div><label for="messageInput">Message</label><textarea id="messageInput" rows="10"></textarea></div><button type="submit">Send</button>';

    fetchedInfoDiv.append(pageLinkContainer, refreshButton, messageContainer, sendBoxButton, sendBox);
    return fetchedInfoDiv;
}

$(function () {
    Array.from(document.getElementsByClassName("whiteMarker")).forEach(e => {
        e.addEventListener("click", openMarker);
    });

    const markerDiv = createMarkerDiv();
    document.getElementById("iff-snippet").prepend(markerDiv);
});