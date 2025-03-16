// Variable to save the last checked button
let lastChecked;
//The main funtion to change styles according to clcicked button
export function changeContainerStyels() {
  //save contianers in variable
  const radioContainer = document.querySelectorAll(".js-radio-container");
  //loop on containers to apply styles if button clicked
  radioContainer.forEach((container) => {
    //if container clicked radio button will checked 
    container.addEventListener("click", () => {
      container.querySelector("input[type='radio']").checked = true;
      checkLastClicked(container);
    });
  });
}
// function to check wich was the last click 
function checkLastClicked(container) {
  //this condtion if there is an lastcheck item and not occurs at first time
  if (lastChecked) {
    lastChecked.classList.remove("actived-radio-button-div");
    container.classList.add("actived-radio-button-div");
  } else {
    /*this used for first time checking to update lastchecked  */
    container.classList.add("actived-radio-button-div");
  }
  lastChecked = container;

}
