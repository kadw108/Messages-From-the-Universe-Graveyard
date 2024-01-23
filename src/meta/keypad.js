/* From https://gist.github.com/code-boxx/7fe1a40cd24e1e9c3ec33d2801afed10
 * Copyright Code Boxx, released under MIT License
 */

var numpad = {
  // (A) PROPERTIES
  // (A1) HTML ELEMENTS
  hDisplay: null, // number display
  maxDig: 4,
  maxDec: 0,
  disabled: false,

  // (B) INIT - CREATE NUMPAD HTML
  init: () => {
    // (B1) NUMPAD WRAPPER
    numpad.hDisplay = document.getElementById("numDisplay");

    // (B2) ATTACH BUTTONS
    let hbWrap = document.getElementById("numBWrap"),
      buttonator = (txt, css, fn) => {
        let button = document.createElement("div");
        button.innerHTML = txt;
        button.classList.add(css);
        button.onclick = fn;
        hbWrap.appendChild(button);
      };

    for (let i = 7; i <= 9; i++) {
      buttonator(i, "num", () => numpad.digit(i));
    }
    buttonator("&#10502;", "del", numpad.delete);
    for (let i = 4; i <= 6; i++) {
      buttonator(i, "num", () => numpad.digit(i));
    }
    buttonator("C", "clr", numpad.reset);
    for (let i = 1; i <= 3; i++) {
      buttonator(i, "num", () => numpad.digit(i));
    }
    buttonator(0, "zero", () => numpad.digit(0));
    buttonator("&#10004;", "ok", numpad.select);
  },

  // (C) BUTTON ACTIONS
  // (C1) NUMBER (0 TO 9)
  digit: (num) => {
    if (!numpad.disabled) {
      // (C1-1) CURRENT VALUE
      let v = numpad.hDisplay.value;

      // (C1-2) WHOLE NUMBER (NO DECIMAL POINT)
      if (v.indexOf(".") == -1) {
        if (v.length < numpad.maxDig) {
          if (v == "0") {
            numpad.hDisplay.value = num;
          } else {
            numpad.hDisplay.value += num;
          }
        }
      }

      // (C1-3) DECIMAL POINT
      else {
        if (v.split(".")[1].length < numpad.maxDec) {
          numpad.hDisplay.value += num;
        }
      }
    }
  },

  // (C3) BACKSPACE
  delete: () => {
    if (!numpad.disabled) {
    var length = numpad.hDisplay.value.length;
    if (length == 1) {
      numpad.hDisplay.value = 0;
    } else {
      numpad.hDisplay.value = numpad.hDisplay.value.substring(0, length - 1);
    }
    }
  },

  // (C4) CLEAR ALL
  reset: () => {
    if (!numpad.disabled) {
      numpad.hDisplay.value = "0";
    }
  },

  // (C5) OK - SET VALUE
  select: () => {
    if (numpad.hDisplay.value === "9272") {
      window.crumblingcastle.machine.success(numpad.hDisplay, "maintenanceTunnelX");
      numpad.hDisplay.style.borderColor = "green";
      numpad.disabled = true;
    } else {
      window.crumblingcastle.machine.failure(numpad.hDisplay);
    }
  },
};

$(function () {
  numpad.init();
});
