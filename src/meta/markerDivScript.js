function openMarker() {
    document.getElementById("markerDiv").classList.remove("hidden");
}

function closeMarker() {
    document.getElementById("markerDiv").classList.add("hidden");
}

$(function () {
    document.getElementById("closeMarkerDiv").addEventListener("click", closeMarker);

    Array.from(document.getElementsByClassName("whiteMarker")).forEach(e => {
        e.addEventListener("click", openMarker);
    });

});