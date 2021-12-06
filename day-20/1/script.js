const url = "https://api-thirukkural.vercel.app/api?num=";

const tk_input_form = document.getElementById("tk__input");
const tkNumberInput = document.getElementById("tkNumber");
const tk = document.getElementById("tk");
const tamil__meaning = document.getElementById("tamil__meaning");
const english__meaning = document.getElementById("english__meaning");
const btn_submit = document.getElementById("btn-submit");

btn_submit.addEventListener("click", fetchAndSetKural);
function fetchAndSetKural(e) {
  e.preventDefault();

  fetch(`${url}${tkNumberInput.value}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      tk.innerHTML = `<p>${data.line1}</p><p>${data.line2}</p>`;
      tamil__meaning.innerHTML = `<p>${data.tam_exp}</p>`;
      english__meaning.innerHTML = `<p>${data.eng_exp}</p>`;
      tk_input_form.reset();
    })
    .catch((err) => {
      alert("Not a valid request");
    });
}
