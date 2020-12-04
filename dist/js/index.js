const colorSwitch = document.getElementById("checkbox");

function changeText() {
   const nameSwitch = document.querySelector(".title__mode-clr");
   if (nameSwitch.innerHTML === "Dark Mode") {
      nameSwitch.innerHTML = "Light Mode";
   } else {
      nameSwitch.innerHTML = "Dark Mode";
   }
}

colorSwitch.addEventListener("change", () => {
   document.body.classList.toggle("is-light");

   changeText();
});
