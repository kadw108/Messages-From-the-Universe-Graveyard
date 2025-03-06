/* 
Functions to support loading data into a markerDiv.
Used by src/meta/markerDivScript.js.
Uses readBoard.tsx.
*/

import { getBoard } from "./readBoard";
import { addEndHtml } from "./writeMarkerDiv";
import { h } from "dom-chef";

function loadingNotDone() {
    // @ts-expect-error
    return !window.crumblingcastle.loadingDone;
    /*
    const boardNumber = Number(document.getElementsByClassName("whiteMarker")[0].getAttribute("board"));

    // @ts-expect-error
    if (!window.crumblingcastle.loadingDone && window.crumblingcastle.lastEvaluatedKey && window.crumblingcastle.lastEvaluatedKey.board === boardNumber) {
        return true;
    }
    return false;
    */
}

function addInfiniteScroll() {
    function observeLastLoadedMessage(observer: IntersectionObserver) {
        // the very last .markerMessage in the markerDiv/most recently loaded .markerMessage
        const lastLoadedMessage = document.querySelector("#messageContainer div:last-child .markerMessage:last-child");
        observer.observe(lastLoadedMessage);
    }

    async function handleIntersect(entries: Array<IntersectionObserverEntry>) {
        // the isIntersecting check exists mainly because 
        // calling observer.observe() triggers the observer callback
        // (https://stackoverflow.com/a/53385264)
        // and without the check this would lead to an endless
        // loop that loads every message the moment the board is opened.

        if (entries[0].isIntersecting && loadingNotDone()) {
            observer.disconnect();
            await loadMore();

            setTimeout(() => {
                observeLastLoadedMessage(observer);
            }, 100);
        }
    }

    const observerOptions = {
        // viewport of scrolling ancestor element
        // api tracks intersection of target and root
        root: document.getElementById("markerDiv"),
        rootMargin: "5px",

        // can't have a too-big threshold value or callback won't trigger
        // for message divs that are so long you might not
        // be able to fit the given percentage inside #markerDiv
        // so I made it 0 to be safe
        threshold: 0
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    observeLastLoadedMessage(observer);
}

function closeMarker() {
    document.getElementById("markerDiv").classList.add("hidden");
}

async function loadMore() {
    const loading = <div style={{ width: "80px", height: "20px", marginLeft: "10px" }}><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>;
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.append(loading);

    const boardNumber = Number(document.getElementsByClassName("whiteMarker")[0].getAttribute("board"));
    await getBoard(boardNumber);

    const isNotDone = loadingNotDone();
    if (isNotDone) {
        // console.log("readBoard runs -  still more to be loaded");
    } else {
        // console.log("readBoard runs - all messages loaded");
        addEndHtml();
    }

    loading.remove();

    return isNotDone;
}

function createMarkerDiv() {
    return <div id="markerDiv" className="absoluteAlign hidden menuPanel">
        <div id="loadingDiv">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>

        <div id="fetchedInfoDiv" className="hidden">
            <div id="messageContainer"></div>
        </div>
    </div>;
}

function initialLoadDone() {
    const closeButton = <button type="button" id="closeMarkerDiv" className="closeButton" disabled>X</button> as unknown as HTMLButtonElement;

    const pageLinkContainer = <div id="pageLinkContainer" style={{ height: "30px" }}>
        {closeButton}
    </div>;

    /*
    // @ts-expect-error
    if (window.crumblingcastle.lastEvaluatedKey) {
        // @ts-expect-error
        window.crumblingcastle.loadingDone = false;
    }
    */

    // prevent event listeners from responding to events that happened before they were added
    // not sure if this does anything, frankly
    // clicking in the AREA of the close button while the marker is loading can cause a deferred close
    // event to happen once everything is loaded. It's hard to trigger so I'm leaving it be for now.
    // see https://stackoverflow.com/questions/68395246/prevent-new-eventlistener-from-triggering-for-event-that-occurred-just-before-th
    setTimeout(() => {
        closeButton.disabled = false;
        closeButton.addEventListener("click", closeMarker);
    }, 10);

    document.getElementById("markerDiv").prepend(pageLinkContainer);
    document.getElementById("loadingDiv")?.classList.add("hidden");
    document.getElementById("fetchedInfoDiv")?.classList.remove("hidden");

    addInfiniteScroll();
}

export { createMarkerDiv, initialLoadDone, loadMore };