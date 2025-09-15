$(document).ready(function () {
  $("#calculate").click(function () {
    const a = parseFloat($("#num1").val());
    const b = parseFloat($("#num2").val());
    const op = $("#operator").val();

    if (isNaN(a) || isNaN(b)) {
      $("#result").text("Palun sisesta mõlemad arvud.");
      return;
    }

    let result;
    switch (op) {
      case "+": result = a + b; break;
      case "-": result = a - b; break;
      case "*": result = a * b; break;
      case "/": result = b === 0 ? "Jagamine nulliga!" : a / b; break;
      default: result = "Tundmatu tehe";
    }

    $("#result").text("Tulemus: " + result);
  });
});
