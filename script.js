//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, index) => {

  code.addEventListener('input', (e) => {
    let value = e.target.value;

    // Allow only single character
    if (value.length > 1) {
      value = value.slice(0, 1);
      code.value = value;
    }

    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === "Backspace") {

      if (code.value === "" && index > 0) {
        codes[index - 1].focus();
      } else {
        code.value = "";
      }

    }
  });

});