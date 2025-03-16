export function clearForm() {
  document.querySelectorAll("input").forEach((Element) => {
    const outPutElement = document.querySelector(".js-right-section");
    if (Element.type === "text") {
      Element.value = "";
      const parentElement = Element.parentElement.parentElement;
      parentElement.classList.remove("mortgage-required-error");
      parentElement
        .querySelector(".js-error-message")
        .classList.remove("visable");
    } else {
      Element.checked = false;
      const parentElement = Element.parentElement;
      parentElement.classList.remove("actived-radio-button-div");
      parentElement.parentElement
        .querySelector(".js-error-message-radio ")
        .classList.remove("visable");
    }
    outPutElement.innerHTML = `
        <img src="assets/images/illustration-empty.svg" loading="lazy" />
        <p class="illustration-empty-heading">Results shown here</p>
        <p class="illustration-empty-p">
          Complete the form and click "Calculate Repayments" to see what your
          monthly repayments would be
        </p>
    `;
  });
}
