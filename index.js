let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
const buttonsAvailable = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "*",
  "/",
  ".",
  "=",
  "AC",
  "Backspace",
];
let dot = false;

// Function if dot in display, don't add another dot
function dotCheck() {
  if (display.textContent.includes(".")) {
    dot = true;
  } else {
    dot = false;
  }
}

// Function to check if display is in error
function errorCheck() {
  if (display.textContent.includes("Error")) {
    display.textContent = "";
  }
}

document.addEventListener("keydown", (e) => {
  console.log(typeof e.key);
  switch (e.key) {
    case "Enter":
    case "=":
      try {
        display.innerText = Math.round(eval(display.innerText) * 100) / 100;
        dotCheck();
      } catch (err) {
        display.innerText = "Error";
      }
      break;
    case "Backspace":
      display.innerText = display.innerText.slice(0, -1);
      dotCheck();
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case "+":
    case "-":
    case "*":
    case "/":
      errorCheck();
      display.innerText += e.key;
      break;
    case ".":
      if (!dot) {
        display.innerText += e.key;
        dot = true;
      }
      break;
    default:
      break;
  }
});

function updateDisplay() {
  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      switch (e.target.innerText) {
        case "AC":
          display.innerText = "";
          dotCheck();
          break;
        case "<-":
          display.innerText = display.innerText.slice(0, -1);
          dotCheck();
          break;
        case "=":
          try {
            display.innerText = Math.round(eval(display.innerText) * 100) / 100;
          } catch (err) {
            display.innerText = "Error";
          }
          break;
        case ".":
          if (!dot) {
            display.innerText += e.target.innerText;
            dot = true;
          }
          break;
        default:
          errorCheck();
          display.innerText += e.target.innerText;
          break;
      }
    });
  });
}

function main() {
  updateDisplay();
}

main();
