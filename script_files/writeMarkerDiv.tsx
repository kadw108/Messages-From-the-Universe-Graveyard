/*
Contains functions to support the 'Send Message' feature in a marker div.
Ultimately exports addEndHtml which is used by readMarkerDiv.
*/

import { h } from "dom-chef";
import { addMessage } from "./writeBoard";
import { loadMore } from "./readMarkerDiv";

function addEndHtml() {
    if (document.getElementById("sendBox") === null) {
        const endHtml = <div>
            <button className="endButton" onClick={refreshClickHandler}>Refresh</button>
            <br/>
            <button className="endButton" onClick={showHideSendBox}>Leave a Message?</button>

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
        </div>;

        const markerDiv = document.getElementById("markerDiv");
        markerDiv.append(endHtml);
    }
}

function showHideSendBox(event) {
    if (event.target.innerText === "Hide") {
        hideSendBox();
    } else {
        event.target.innerText = "Hide";
        event.target.style.borderBottom = "none";
        document.getElementById("sendBox").classList.remove("hidden");
    }
}
function hideSendBox() {
    const button = document.querySelector(".endButton:nth-of-type(2)") as HTMLButtonElement;
    button.innerText = "Leave a Message?";
    button.style.borderBottom = "1px solid #aaa";
    document.getElementById("sendBox").classList.add("hidden");
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
        await refresh().then(() => {hideSendBox(); enableSendButton();});

        nameInput.value = "";
        messageInput.value = "";
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

async function refresh() {
    // the very last div of .markerMessages in the markerDiv / div containing most recently loaded .markerMessage
    // remove it because we'll refresh the entire contents
    const lastMessageGroup = document.querySelector("#messageContainer > div:last-child");
    lastMessageGroup.remove();

    const isNotDone = await loadMore();
    if (isNotDone) {
        await loadMore();
    }

    const markerDiv = document.getElementById("markerDiv");
    markerDiv.scrollTo(0, markerDiv.scrollHeight);
}

async function refreshClickHandler() {
    refresh();
}

export {addEndHtml};