const body = document.body;

// Outer container
const outer_container = document.createElement("div");
outer_container.className = "outer-container";
// append outer_container
body.appendChild(outer_container);

// display
const display = document.createElement("input");
display.className = "display";
display.setAttribute("type", "text");
display.setAttribute("value", "");
display.disabled = true;
// append display
outer_container.appendChild(display);

// calculator_body
const calculator_body = document.createElement("div");
calculator_body.className = "calculator-body";
// append calculator_body
outer_container.appendChild(calculator_body);

// buttons container
const buttons = document.createElement("div");
buttons.className = "buttons";
// append buttens container
calculator_body.appendChild(buttons);

// individual buttons
const number = [4, 5, 6, 8, 9, 10, 12, 13, 14, 16];
const operations = [0, 3, 7, 11, 15];
const button_classes = "btn btn-outline-secondary";
const buttons_array = [];
for (let i = 0; i < 20; i++) {
  const btn = document.createElement("BUTTON");
  btn.className = button_classes;
  if (number.includes(i)) btn.className += " " + "btn-numbers";
  if (operations.includes(i)) btn.className += " " + "btn-operations";
  buttons_array.push(btn);
  buttons.appendChild(btn);
}
buttons_array[19].className = "btn btn-primary";
buttons_array[16].className = "btn btn-warning";

// buttons_array[0].innerHTML = "x<sup>3</sup>";
buttons_array[0].innerHTML = "%";
buttons_array[1].innerHTML = "x<sup>2</sup>";
buttons_array[2].innerHTML = " &Sqrt;";
buttons_array[3].innerHTML = "*";
buttons_array[4].innerHTML = "1";
buttons_array[5].innerHTML = "2";
buttons_array[6].innerHTML = "3";
buttons_array[7].innerHTML = "/";
buttons_array[8].innerHTML = "4";
buttons_array[9].innerHTML = "5";
buttons_array[10].innerHTML = "6";
buttons_array[11].innerHTML = "+";
buttons_array[12].innerHTML = "7";
buttons_array[13].innerHTML = "8";
buttons_array[14].innerHTML = "9";
buttons_array[15].innerHTML = "-";
buttons_array[16].innerHTML = "C";
buttons_array[17].innerHTML = "0";
buttons_array[18].innerHTML = ".";
buttons_array[19].innerHTML = "=";

// event listener for capturing numbers
body.addEventListener("keydown", (event) => {
  let name = event.key;
  if (!parseInt(name)) {
    alert(`Only Numbers allowed`);
  } else {
    display.value += name;
  }
});

// clearscreen
buttons_array[16].addEventListener("click", () => {
  display.value = "";
});

// square
buttons_array[1].addEventListener("click", () => {
  if (display.value) {
    let val = parseFloat(eval(display.value));
    display.value = Math.pow(val, 2).toFixed(2);
  }
});

// sqrt
buttons_array[2].addEventListener("click", () => {
  if (display.value) {
    let val = parseFloat(eval(display.value));
    display.value = Math.sqrt(val).toFixed(2);
  }
});

// Equal
const equate = () => {
  display.value = Number.isInteger(eval(display.value))
    ? eval(display.value)
    : eval(display.value).toFixed(2);
};
buttons_array[19].addEventListener("click", equate);

// .
buttons_array[18].addEventListener("click", () => {
  display.value += buttons_array[18].innerText;
});

// Numbers
const numbers_button = document.getElementsByClassName("btn-numbers");
for (let i = 0; i < numbers_button.length; i++) {
  numbers_button[i].addEventListener("click", () => {
    display.value += numbers_button[i].innerText;
  });
}

// Operations
const operation_button = document.getElementsByClassName("btn-operations");
for (let i = 0; i < operation_button.length; i++) {
  operation_button[i].addEventListener("click", () => {
    display.value += operation_button[i].innerText;
  });
}
