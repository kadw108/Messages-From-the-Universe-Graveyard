/* 
Split off from markerDivScript.js for organization.
All functions eventually called by markerDivScript.js.
*/

import { getBoard } from "./readBoard";
import { h } from "dom-chef";
import { addMessage } from "./writeBoard";

function closeMarker() {
    document.getElementById("markerDiv").classList.add("hidden");
}

async function refresh(refreshButton) {
    refreshButton.innerHTML = "";
    refreshButton.append(<div style={{ width: "50px", height: "12.5px" }}><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>);
    refreshButton.disabled = true;

    const boardNumber = Number(document.getElementsByClassName("whiteMarker")[0].getAttribute("board"));
    await getBoard(boardNumber);

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
    } else {
        event.target.innerText = "Hide";
        event.target.style.borderBottom = "none";
        document.getElementById("sendBox").classList.remove("hidden");
    }
}

function enableSendButton() {
    setTimeout(() => {
        const submitButton = document.querySelector("#sendBox > button") as HTMLButtonElement;
        if (submitButton !== null) {
            submitButton.disabled = false;
            submitButton.innerText = "Send";
        }
    }, 1000);
}

async function submitMessageForm(event) {
    event.preventDefault();

    const submitButton = document.querySelector("#sendBox > button") as HTMLButtonElement;
    submitButton.disabled = true;
    submitButton.innerText = "Please Wait";

    let nameInput = document.getElementById("nameInput") as HTMLInputElement;
    let messageInput = document.getElementById("messageInput") as HTMLInputElement;

    const boardNumber = Number(document.getElementsByClassName("whiteMarker")[0].getAttribute("board"));
    const name = nameInput.value;
    const message = messageInput.value;

    const result = await addMessage(boardNumber, name, message);
    if (result.success === false) {
        console.log(result);

        const errorDiv = document.getElementById("submitErrorDiv");
        errorDiv.innerText = "{An error occured while writing the message. Please wait a short time and try again.}";

        enableSendButton();
    } else {
        await refresh(document.getElementById("refreshButton")).then(enableSendButton);

        nameInput.value = "";
        messageInput.value = "";
    }
}

function createMarkerDiv() {
    const markerDiv = <div id="markerDiv" className="absoluteAlign hidden menuPanel">
        <div id="loadingDiv">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>

        <div id="fetchedInfoDiv" className="hidden">
            <div id="messageContainer"></div>

            <button id="sendBoxButton" onClick={showHideSendBox}>Leave a Message?</button>

            <form id="sendBox" className="hidden" onSubmit={submitMessageForm}>
                <h6>Leave a Message?</h6>
                <div>
                    <label htmlFor="nameInput">Name <small>[3-32 characters]</small></label>
                    <input type="text" maxLength={32} minLength={3} id="nameInput" title="Name from 3 to 32 characters."></input>
                </div>
                <div>
                    <label htmlFor="messageInput">Message <small>[50-2750 characters]</small></label>
                    <textarea id="messageInput" rows={10} maxLength={2750} minLength={50} title="Message from 50 to 2750 characters."></textarea>
                </div>

                <button type="submit">Send</button>
                <div id="submitErrorDiv"></div>
            </form>
        </div>
    </div>;

    return markerDiv;
}

function createPageLinkContainer() {
    const closeButton = <button type="button" id="closeMarkerDiv" className="closeButton" disabled>X</button> as unknown as HTMLButtonElement;
    const refreshButton = <button type="button" id="refreshButton" disabled>Refresh</button> as unknown as HTMLButtonElement;

    const pageLinkContainer = <div id="pageLinkContainer">
        {refreshButton}
        {closeButton}
    </div>;

    // prevent event listeners from responding to events that happened before they were added
    // not sure if this does anything, frankly
    // clicking in the AREA of the close button while the marker is loading can cause a deferred close
    // event to happen once everything is loaded. It's hard to trigger so I'm leaving it be for now.
    // see https://stackoverflow.com/questions/68395246/prevent-new-eventlistener-from-triggering-for-event-that-occurred-just-before-th
    setTimeout(() => {
        closeButton.disabled = false;
        refreshButton.disabled = false;

        closeButton.addEventListener("click", closeMarker);
        refreshButton.addEventListener("click", refreshClickHandler);
    }, 10);

    document.getElementById("markerDiv").prepend(pageLinkContainer);
}

export { createMarkerDiv, createPageLinkContainer };