function activateMachine(event) {
    $(function () {
        Array.from(document.getElementsByClassName("successfulActivation")).forEach(e => {
            e.classList.remove("hidden");
        });

        Array.from(document.getElementsByClassName("activateLink")).forEach(e => {
            e.classList.add("hidden");
        });
    });
}

function editMachineDiv() {
    $(function () {
        Array.from(document.getElementsByClassName("activateLink")).forEach(e => {
            e.addEventListener("click", activateMachine);
        });
    });
}

$(function () {
    editMachineDiv();
});
