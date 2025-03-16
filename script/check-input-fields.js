// function to check from the input fields data
export function checkInputFeild() {
  const containerElement = document.querySelectorAll(
    ".js-input-number-field-container"
  );
  const chooseContainerElement = document.querySelectorAll(
    ".js-radio-container"
  );
  // create this at start by true to use it if there is no proplem
  let notEmpty = true;
  // this used to check if there is noradio button clicked
  let notChecked = true;
  const emptyFiealdMassegeElement = document.querySelector(
    ".js-error-message-radio"
  );
  chooseContainerElement.forEach((Element) => {
    const radioButtonElement = Element.querySelector("input[type='radio']");
    //if it's not checked and there is no button checked
    if (!radioButtonElement.checked && notChecked) {
      // add visaailty to error massege
      emptyFiealdMassegeElement.classList.add("visable");
      notEmpty = false;
    } else {
      //else it's checked or there are another checked button diappere the error massege and update notcheked to false
      emptyFiealdMassegeElement.classList.remove("visable");
      notChecked = false;
      notEmpty = true;
    }
  });
  containerElement.forEach((Element) => {
    // put the input and erroe massege in js
    const inputElement = Element.querySelector("input");
    const emptyFiealdMassegeElement =
      Element.querySelector(".js-error-message");
    // if the value isn't empty return truthy value
    if (inputElement.value) {
      //remove error class from the massege and input
      emptyFiealdMassegeElement.classList.remove("visable");
      Element.classList.remove("mortgage-required-error");
    } else {
      //else it's empty add the error class to massege and input
      emptyFiealdMassegeElement.classList.add("visable");
      Element.classList.add("mortgage-required-error");
      notEmpty = false;
    }
  });

  //return notEmpty to check that we can do calculations
  return notEmpty;
}
