import Functions from "./models/Functions.class.mjs";
const menuDropDown = document.getElementById("dropdown");
const dropDownContent = document.getElementById("dropdown-links")

menuDropDown.addEventListener("click", () => {
  dropDownContent.classList.toggle("show")
})
