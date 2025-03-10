/* Most of this was split off into script_files/readMarkerDiv.tsx and writeMarkerDiv.tsx for organization. */

let markerOpened = false;

async function openMarker(event) {
    document.getElementById("markerDiv").show();
    if (!markerOpened) {
        markerOpened = true;

        boardNumber = Number(event.target.getAttribute("board"));
        const ref = window.crumblingcastle;
        ref.lastEvaluatedKey = null;
        await ref.getBoard(boardNumber);

        ref.initialLoadDone();
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
