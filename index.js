console.log("hi");
const selectEL = document.getElementsByName("button");
const body = document.querySelector("body");
const form = document.querySelector("form");
const success = document.querySelector(".success");
const nameInput = document.querySelector("#name");
let button = document.querySelector("button");

// button.addEventListener("click", (e) => {
//   form.style.display = "block";
//   e.preventDefault();
//   // form.style.display = "none";

//   console.log("Button Clicked");
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.style.display = "none";
  success.style.display = "flex";
  alert("order Received");
  console.log("successfully submitted");
});
