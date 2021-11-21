// https://gist.github.com/AbulHissam/88d91b599756690b9c5f520db887dabe

// let division = document.createElement("div");
// division.innerHTML = "this is dynamic div";
// document.body.append(division);
// function foo() {
//   let firstName = document.getElementById("firstName").value;
//   let middleName = document.getElementById("middleName").value;
//   let lastName = document.getElementById("lastName").value;
//   console.log(`${firstName} ${lastName}`);
// }
document.getElementById("btn--submit").addEventListener("click", (e) => {
  e.preventDefault();
  let firstName = document.getElementById("firstName").value;
  let middleName = document.getElementById("middleName").value;
  let lastName = document.getElementById("lastName").value;
  console.log(`${firstName} ${lastName}`);
});
let paragraphs = document.getElementsByTagName("p");
for (let i in paragraphs) {
  console.log(paragraphs[i]);
}
