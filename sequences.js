






































function htmlInput() {
  // This function gets the user input.

  let inputArray = document.getElementById("array").value;

  let inputSequence = document.getElementById("sequence").value;

  convertingToNumbers(inputArray, inputSequence);
}

function convertingToNumbers(inputArray, inputSequence) {
  // This function takes the input strings and convert them to arrays of numbers.

  inputArray = inputArray.split("").map(Number);

  inputSequence = inputSequence.split("").map(Number);

  errorChecking(inputArray, inputSequence);
}

function errorChecking(inputArray, inputSequence) {
  // This function checks if the length of the arrays meet the requirements.

  let lengthOfArr = inputArray.length;

  let lengthOfSequence = inputSequence.length;

  if (lengthOfArr < 3) {
    return alert("Please enter more than three integers for the array!");
  }

  if (lengthOfSequence < 2) {
    return alert("Please enter more than one integer for the sequence!");
  }

  checkIsAdjacent(inputArray, inputSequence);
}

function checkIsAdjacent(inputArray, inputSequence) {
  // This function checks if the isAdjacent checkbox is checked.

  let isAdjacent = document.getElementById("adjacent").checked;

  displayingResult(inputArray, inputSequence, isAdjacent);
}

function displayingResult(inputArray, inputSequence, isAdjacent) {
  // This function displays the result of all the operations.

  let result = isAdjacentCheckedOrNot(inputArray, inputSequence, isAdjacent);

  document.getElementById("result").innerHTML = result;
}

function isAdjacentCheckedOrNot(inputArray, inputSequence, isAdjacent) {
  // This function have two possible return values. 
  // If the isAdjacent checkbox is checked it returns the result of isAdjacentIsChecked function.
  // If the isAdjacent checkbox is not checked it returns the result of isAdjacentNotChecked function.

  if (isAdjacent === false) {
    return isAdjacentNotChecked(inputArray, inputSequence);
  } else {
    return isAdjacentIsChecked(inputArray, inputSequence);
  }
}

function isAdjacentNotChecked(inputArray, inputSequence) {
  // This function makes the checking in case of isAdjacent checkbox is not checked.

  let sequenceArray = [];

  inputArray = inputArray.slice(inputArray.indexOf(inputSequence[0]));

  sequenceArray = inputSequence.filter((par) =>
    inputArray.includes(par) ? inputArray.splice(inputArray.indexOf(par), 1) : false
  );

  if (sequenceArray.length === 0) {
    return "False";
  } else if (sequenceArray.length !== inputSequence.length) {
    return "False";
  }

  for (let i = 0; i < sequenceArray.length; i++) {
    if (sequenceArray.indexOf(inputSequence[i]) !== inputSequence.indexOf(inputSequence[i])) {
      return "False";
    }
  }

  return "True";
}

function isAdjacentIsChecked(inputArray, inputSequence) {
  // This function makes the checking if isAdjacent checkbox is checked.

  let lengthOfArr = inputArray.length;

  let lengthOfSequence = inputSequence.length;

  let sequenceArray = [];

  let j = 0;

  for (let i = 0; i < lengthOfArr; i++) {
    if (inputArray[i] === inputSequence[j]) {
      sequenceArray.push(inputArray[i]);

      j++;

      if (j > lengthOfSequence - 1) {
        return "True";
      }
    } else if (j > 0) {
      return "False";
    }
  }

  if (sequenceArray.length !== lengthOfSequence) {
    return "False";
  }
}

// The codes below get the submit button element and adds an event listener to it.
// If the button is clicked the function htmlInput() is called and all operations in this file are executed.

let submitElement = document.getElementById("submit1");

submitElement.addEventListener("click", (e) => {
  e.preventDefault();

  htmlInput();
});
