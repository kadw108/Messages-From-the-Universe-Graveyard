function openMachine(event) {
    document.getElementById("machineDiv").classList.remove("hidden");
}

function closeMachine(event) {
    document.getElementById("machineDiv").classList.add("hidden");
}

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
    const closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.type = "button";
    closeButton.id = "closeMachineDiv";
    closeButton.classList.add("closeButton");
    closeButton.addEventListener("click", closeMachine);

    $(function () {
        Array.from(document.getElementsByClassName("activateLink")).forEach(e => {
            e.addEventListener("click", activateMachine);
        });
    });

    document.getElementById("machineDiv").append(closeButton);
}

$(function () {
    Array.from(document.getElementsByClassName("machine")).forEach(e => {
        e.addEventListener("click", openMachine);
    });

    editMachineDiv();
});
