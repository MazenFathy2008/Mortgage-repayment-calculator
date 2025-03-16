import { changeContainerStyels } from "./radi-container-ch-st.js";
import { checkInputFeild } from "./check-input-fields.js";
import { formatInputfield } from "./formate-input.js";
import { clearForm } from "./clear-button.js";
import { getInput } from "./prepareing-data.js";
changeContainerStyels();
formatInputfield();
function formatNumber(number = 0) {
  return number.toFixed(2);
}
document.querySelector(".js-clear-link").addEventListener("click", () => {
  clearForm();
});
document.querySelector("button").addEventListener("click", () => {
  const noError = checkInputFeild();
  if (noError) {
    const [morageAmount, months, InterestRateMonthly] = getInput();
    document.querySelectorAll("input[type='radio']").forEach((button) => {
      if (button.checked) {
        let result;
        const outPutElement = document.querySelector(".js-right-section");
        if (button.dataset.choice === "Repayment") {
          result =
            (morageAmount * InterestRateMonthly) /
            (1 - (1 + InterestRateMonthly) ** -months);
        } else if (button.dataset.choice === "Interest") {
          result = InterestRateMonthly * morageAmount;
        }
        outPutElement.innerHTML = `
        <div class="results-container">
          <div class="header-results-container">
            <h1>Your Results</h1>
            <p>
              Your results are shown below based on the information you
              provided. To adjust the results. edit the form and click
              "calculate repayments" again.
            </p>
          </div>
          <div class="main-results-container">
            <div class="monthly-result-container">
              <p>Your monthly repayments</p>
              <span>&#8356;${formatNumber(result)}</span>
            </div>
            <div class="total-result-container">
              <p>Total you'll repay over the term</p>
              <span>&#8356;${formatNumber(result * months)}</span>
            </div>
          </div>
        </div>
        `;
      }
    });
  }
});
