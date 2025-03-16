export function getInput() {
  let morageAmount = Number(
    document.querySelector(".js-mortgage-amount").value.replace(/,/g, "")
  );
  const months =
    Number(
      document.querySelector(".js-mortgage-years").value.replace(/,/g, "")
    ) * 12;
  const InterestRateMonthly =
    Number(
      document.querySelector(".js-mortgage-percent").value.replace(/,/g, "")
    ) / 100;

  return [morageAmount, months, InterestRateMonthly/12];
}
