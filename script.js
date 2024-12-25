// Select elements from the DOM using optimized IDs
const fromBaseSelect = document.getElementById('from-base-select'); // Dropdown for the base to convert from
const toBaseSelect = document.getElementById('to-base-select'); // Dropdown for the base to convert to
const numberInput = document.getElementById('number-input'); // Input field for the number
const convertButton = document.getElementById('convert-button'); // Button to trigger the conversion
const resultDisplay = document.getElementById('result-display'); // Div to display the conversion result

// Add event listener to the convert button
convertButton.addEventListener('click', () => {
  const fromBase = fromBaseSelect.value.toLowerCase(); // Get the selected "from" base
  const toBase = toBaseSelect.value.toLowerCase(); // Get the selected "to" base
  const inputNumber = numberInput.value.trim(); // Get the input number and trim whitespace

  // Validate input
  if (!inputNumber) {
    resultDisplay.textContent = 'Please enter a valid number.';
    return;
  }

  try {
    // Convert the number to decimal first
    const decimalValue = parseInt(inputNumber, getBase(fromBase));
    if (isNaN(decimalValue))
      throw new Error('Invalid number for the selected base.');

    // Convert the decimal value to the target base
    const convertedValue = decimalValue.toString(getBase(toBase));
    resultDisplay.textContent = `Result: ${convertedValue}`;
  } catch (error) {
    resultDisplay.textContent = 'Error: ' + error.message;
  }
});

// Helper function to map base names to their numerical values
function getBase(baseName) {
  switch (baseName) {
    case 'binary':
      return 2;
    case 'octal':
      return 8;
    case 'decimal':
      return 10;
    case 'hexadecimal':
      return 16;
    default:
      throw new Error('Unknown base: ' + baseName);
  }
}
