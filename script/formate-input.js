export function formatInputfield() {
  document.querySelectorAll(".js-input-number-field").forEach((Element) => {
    Element.addEventListener("input", () => {
      let value = Element.value
        .replace(/[^0-9.]/g, "")
        .replace(/(\..*?)\..*/g, "$1");
      if (!value) {
        Element.value = "";
        return;
      } else if (value.startsWith(".")) {
        Element.value = "0.";
        return;
      } else if (value.endsWith(".")) {
        value = `${numbro(Number(value)).format({
          thousandSeparated: true,
        })}.`;
        Element.value = value;
        return;
      } else if (value.includes(".")) {
        const [integer, decimal] = value.split(".");
        Element.value = `${numbro(integer).format({
          thousandSeparated: true,
        })}.${decimal}`;
        return;
      }
      Element.value = numbro(value).format({
        thousandSeparated: true,
      });
    });
  });
}
