const buttons = document.querySelectorAll("button");
const screen = document.getElementById("screen");

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;

    if (buttonText === "AC") {
      screen.value = "";
    } else if (buttonText === "x") {
      screen.value += "*";
    } else if (buttonText === "DEL") {
      screen.value = screen.value.substr(0, screen.value.length - 1);
    } else if (buttonText === "=") {
      try {
        screen.value = eval(screen.value);
      } catch (e) {
        screen.value = "Invalid Operation";
      }
    } else {
      screen.value += buttonText;
    }
  });
}
