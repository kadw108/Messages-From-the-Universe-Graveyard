let markerOpened = false;
let failures = 0;

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

async function refresh(refreshButton) {
    refreshButton.innerHTML = "<img src='assets/loading.gif' style='width: 18px;'/>";
    refreshButton.disabled = true;

    const ref = window.crumblingcastle;
    const boardNumber = Number(document.getElementsByClassName("whiteMarker")[0].getAttribute("board"));
    await ref.getBoard(boardNumber);

    refreshButton.innerHTML = "Refresh";
    refreshButton.disabled = false;
}

async function refreshClickHandler(event) {
    refresh(event.target);
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

function enableSendButton() {
    setTimeout(() => {
        const submitButton = document.querySelector("#sendBox > button");
        if (submitButton !== null) {
            submitButton.disabled = false;
            submitButton.innerText = "Send";
        }
    }, 1000);
}

async function submitMessageForm(event) {
  event.preventDefault();

  const submitButton = document.querySelector("#sendBox > button");
  submitButton.disabled = true;
  submitButton.innerText = "Please Wait";

  let nameInput = document.getElementById("nameInput");
  let messageInput = document.getElementById("messageInput");

  const boardNumber = Number(document.getElementsByClassName("whiteMarker")[0].getAttribute("board"));
  const name = nameInput.value;
  const message = messageInput.value;

  const ref = window.crumblingcastle;
  const result = await ref.addMessage(boardNumber, name, message);
  if (result.success === false) {
    console.log(result);

    failures++;
    const errorDiv = document.getElementById("submitErrorDiv");
    errorDiv.innerText = "{An error occured while writing the message. Please wait a short time and try again. Failure count: " + failures + ".}"

    enableSendButton();
  }
  else {
    await refresh(document.getElementById("refreshButton")).then(enableSendButton);

    nameInput.value = "";
    messageInput.value = "";
  }
}

function createMarkerDiv() {
    const markerDiv = document.createElement("div");
    markerDiv.id = "markerDiv";
    markerDiv.classList.add("absoluteAlign", "hidden", "panelFull");

    const closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.type = "button";
    closeButton.id = "closeMarkerDiv";
    closeButton.classList.add("closeButton");
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
    refreshButton.addEventListener("click", refreshClickHandler);

    const messageContainer = document.createElement("div");
    messageContainer.id = "messageContainer";

    const sendBoxButton = document.createElement("button");
    sendBoxButton.id = "sendBoxButton";
    sendBoxButton.innerText = "Leave a Message?";
    sendBoxButton.addEventListener("click", showHideSendBox);

    const sendBox = document.createElement("form");
    sendBox.id = "sendBox";
    sendBox.classList.add("hidden");
    sendBox.innerHTML = '<h6>Leave a Message?</h6><div><label for="nameInput">Name <small>[3-32 characters]</small></label><input type="text" maxlength="32" minlength="3" id="nameInput" "Name from 3 to 32 characters."></div><div><label for="messageInput">Message <small>[50-2750 characters]</small></label><textarea id="messageInput" rows="10" maxlength="2750" minlength="50" title="Message from 50 to 2750 characters."></textarea></div>';
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerText = "Send";
    sendBox.appendChild(submitButton);
    const submitErrorDiv = document.createElement("div");
    submitErrorDiv.id = "submitErrorDiv";
    sendBox.appendChild(submitErrorDiv);
    sendBox.addEventListener("submit", submitMessageForm);

    fetchedInfoDiv.append(pageLinkContainer, refreshButton, messageContainer, sendBoxButton, sendBox);
    return fetchedInfoDiv;
}

$(function () {
    const whiteMarkerList = Array.from(document.getElementsByClassName("whiteMarker"));

    if (whiteMarkerList.length > 0) {
        whiteMarkerList.forEach(e => {
            e.addEventListener("click", openMarker);
        });

        const markerDiv = createMarkerDiv();
        document.getElementById("iff-snippet").prepend(markerDiv);
    }
});