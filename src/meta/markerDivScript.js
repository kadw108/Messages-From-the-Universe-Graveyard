/* Part of this was split off into markerDivScript.tsx for organization. */

let markerOpened = false;

async function openMarker(event) {
    document.getElementById("markerDiv").classList.remove("hidden");
    if (!markerOpened) {
        markerOpened = true;

        boardNumber = Number(event.target.getAttribute("board"));
        const ref = window.crumblingcastle;
        await ref.getBoard(boardNumber);

        document.getElementById("loadingDiv")?.classList.add("hidden");
        ref.createPageLinkContainer();
        document.getElementById("fetchedInfoDiv")?.classList.remove("hidden");
    }
}

$(function () {
    const whiteMarkerList = Array.from(document.getElementsByClassName("whiteMarker"));

    if (whiteMarkerList.length > 0) {
        whiteMarkerList.forEach((e) => {
            e.addEventListener("click", openMarker);
        });

        const markerDiv = window.crumblingcastle.createMarkerDiv();
        document.getElementById("iff-snippet").prepend(markerDiv);
    }
});
