const myForm = document.getElementById("myForm");
const btn_submit = document.getElementById("btn-submit");
const table_body = document.getElementById("table-body");
let firstName,
  lastName,
  address,
  pincode,
  gender_elements,
  gender = "",
  food_choices,
  selected_foods,
  state,
  country;

function init() {
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  address = document.getElementById("address").value;
  pincode = document.getElementById("pincode").value;

  gender_elements = document.getElementsByClassName("gender");
  for (let i = 0; i < gender_elements.length; i++) {
    if (gender_elements[i].checked === true) gender = gender_elements[i].value;
  }

  food_choices = document.getElementById("food-choices");
  selected_foods = [...food_choices.options]
    .filter((option) => option.selected)
    .map((option) => option.value);

  state = document.getElementById("state").value;
  country = document.getElementById("country").value;
}

function pushDataToTable() {
  const row = document.createElement("tr");
  table_body.appendChild(row);
  const table_data = [];
  for (let i = 0; i < 8; i++) {
    table_data.push(document.createElement("td"));
  }
  table_data[0].innerText = firstName;
  table_data[1].innerText = lastName;
  table_data[2].innerText = address;
  table_data[3].innerText = pincode;
  table_data[4].innerText = gender;
  table_data[5].innerText = selected_foods;
  table_data[6].innerText = state;
  table_data[7].innerText = country;
  for (let i = 0; i < 8; i++) {
    row.appendChild(table_data[i]);
  }
}

function validateFormAndPushDataToTable() {
  let flag = false;
  if (!firstName) {
    alert("Please Enter First Name");
  } else if (!lastName) {
    alert("Please Enter Last Name");
  } else if (!address) {
    alert("Please Enter Address");
  } else if (pincode.length !== 6) {
    alert("Please Enter valid Pincode");
  } else if (selected_foods.length < 2) {
    alert("Select atleast two foods");
  } else {
    flag = true;
  }
  return flag;
}

btn_submit.addEventListener("click", (e) => {
  e.preventDefault();
  init();
  if (validateFormAndPushDataToTable()) {
    pushDataToTable();
    myForm.reset();
  }
});
