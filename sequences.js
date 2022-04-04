






































function htmlInput() {
  let inputArray = document.getElementById("array").value;

  let inputSequence = document.getElementById("sequence").value;

  convertingToNumbers(inputArray, inputSequence);
}

function convertingToNumbers(inputArray, inputSequence) {
  inputArray = inputArray.split("").map(Number);

  inputSequence = inputSequence.split("").map(Number);

  errorChecking(inputArray, inputSequence);
}

function errorChecking(inputArray, inputSequence) {
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
  let isAdjacent = document.getElementById("adjacent").checked;

  displayingResult(inputArray, inputSequence, isAdjacent);
}

function displayingResult(inputArray, inputSequence, isAdjacent) {
  let result = isAdjacentCheckedOrNot(inputArray, inputSequence, isAdjacent);

  document.getElementById("num1").innerHTML = result;
}

function isAdjacentCheckedOrNot(inputArray, inputSequence, isAdjacent) {
  if (isAdjacent === false) {
    return isAdjacentNotChecked(inputArray, inputSequence);
  } else {
    return isAdjacentIsChecked(inputArray, inputSequence);
  }
}

function isAdjacentNotChecked(inputArray, inputSequence) {
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

let submitElement = document.getElementById("submit1");

submitElement.addEventListener("click", (e) => {
  e.preventDefault();

  htmlInput();
});
