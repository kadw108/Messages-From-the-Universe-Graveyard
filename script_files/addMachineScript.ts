import { coordinateMap } from "./coordinateMap";

export const machine = {
    success: function(coordinateInput, destination) {
        coordinateInput.disabled = true;

        Array.from(document.getElementsByClassName("unsuccessfulActivation")).forEach(e => {
            e.classList.add("hidden");
        });

        Array.from(document.getElementsByClassName("successfulActivationLink")).forEach(e => {
            e.addEventListener("click", () => {
                // @ts-expect-error
                window.crumblingcastle.showSnippetWrapper(destination);
            });
        });

        Array.from(document.getElementsByClassName("successfulActivation")).forEach(e => {
            e.classList.remove("hidden");
        });

        Array.from(document.getElementsByClassName("activateLink")).forEach(e => {
            e.classList.add("hidden");
        });
    },


    failure: function(coordinateInput) {
        Array.from(document.getElementsByClassName("unsuccessfulActivation")).forEach(e => {
            e.classList.remove("hidden");
        });

        Array.from(document.getElementsByClassName("successfulActivation")).forEach(e => {
            e.classList.add("hidden");
        });

        coordinateInput.value = "";
    },


    use: function(event) {
        const coordinateInput = document.querySelector(".machineScreen input");
        const coordinateValue = parseInt((coordinateInput as HTMLInputElement).value);
        const destination = coordinateMap[coordinateValue];
        const location = event.target.getAttribute("location");

        if (destination !== undefined) {
            machine.success(coordinateInput, destination);
        }
        else {
            machine.failure(coordinateInput);
        }
    },

    editMachineDiv: function() {
        if (document.querySelectorAll(".menuPanel[identifier='machine']").length > 0) {
            Array.from(document.getElementsByClassName("activateLink")).forEach(e => {
                e.addEventListener("click", machine.use);
            });

            // https://stackoverflow.com/a/54163655 
            // allow only typing numbers in input box
            const coordinateInput = document.querySelector(".machineScreen input");
            if (coordinateInput === null) {
                console.error("Machine input is null.");
                return;
            }
            (coordinateInput as HTMLInputElement).onkeydown = (event) => {
                if (['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code)) {
                    return true;
                }
                
                return (!isNaN(Number(event.key)) && event.code !== 'Space');
            };
        }
    }
};