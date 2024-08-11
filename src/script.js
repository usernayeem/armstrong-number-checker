document.getElementById("btn").onclick = function () {
  // Clear previous results
  document.getElementById("outputArea").innerHTML = "";

  // Get input value and convert it to a number
  const userInput = parseInt(document.getElementById("inputValue").value);

  // Check if the number is an Armstrong number
  const digits = userInput.toString().split("");
  let sum = 0;

  // Calculate the sum of cubes of digits
  for (const element of digits) {
    const cube = Math.pow(parseInt(element), digits.length);
    sum += cube;
  }

  // Display the result
  if (userInput === sum) {
    document.getElementById("outputArea").innerHTML = `Yes, ${userInput} is an Armstrong number`;
  } else {
    document.getElementById("outputArea").innerHTML = `No, ${userInput} is not an Armstrong number`;
  }
};