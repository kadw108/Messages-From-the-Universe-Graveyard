function openPortal(coordinateInput, destination) {
    coordinateInput.disabled = true;

    Array.from(document.getElementsByClassName("unsuccessfulActivation")).forEach(e => {
        e.classList.add("hidden");
    });

    Array.from(document.getElementsByClassName("successfulActivationLink")).forEach(e => {
        e.addEventListener("click", () => {
            story.showSnippet(destination);
        });
    });

    Array.from(document.getElementsByClassName("successfulActivation")).forEach(e => {
        e.classList.remove("hidden");
    });

    Array.from(document.getElementsByClassName("activateLink")).forEach(e => {
        e.classList.add("hidden");
    });
}

function activateMachine(event) {
    const coordinateInput = document.querySelector(".machineScreen input");
    const destination = window.crumblingcastle.coordinateMap[coordinateInput.value];
    if (destination !== undefined && destination !== snippet.name) {
        openPortal(coordinateInput, destination);
    }
    else {
        Array.from(document.getElementsByClassName("unsuccessfulActivation")).forEach(e => {
            e.classList.remove("hidden");
        });

        Array.from(document.getElementsByClassName("successfulActivation")).forEach(e => {
            e.classList.add("hidden");
        });

        coordinateInput.value = "";
    }
}

function editMachineDiv() {
    $(function () {
        Array.from(document.getElementsByClassName("activateLink")).forEach(e => {
            e.addEventListener("click", activateMachine);
        });
    });

    // https://stackoverflow.com/a/54163655 
    // allow only typing numbers in input box
    document.querySelector(".machineScreen input").onkeydown = (event) => {
        if (['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code)) {
            return true;
        }
        
        return (!isNaN(Number(event.key)) && event.code !== 'Space');
    };
}

$(function () {
    editMachineDiv();
});
