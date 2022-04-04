function htmlInput() {
  let arr = document.getElementById("array").value;

  let sequence = document.getElementById("sequence").value;

  convertingToNumbers(arr, sequence);
}

function convertingToNumbers(arr, sequence) {
  arr = arr.split("").map(Number);

  sequence = sequence.split("").map(Number);

  errorChecking(arr, sequence);
}

function errorChecking(arr, sequence) {
  let lengthOfArr = arr.length;

  let lengthOfSequence = sequence.length;

  if (lengthOfArr < 3) {
    return alert("Please enter more than three integers for the array!");
  }

  if (lengthOfSequence < 2) {
    return alert("Please enter more than one integer for the sequence!");
  }

  checkIsAdjacent(arr, sequence);
}

function checkIsAdjacent(arr, sequence) {
  let isAdjacent = document.getElementById("adjacent").checked;

  displayingResult(arr, sequence, isAdjacent);
}

function displayingResult(arr, sequence, isAdjacent) {
  let result = isAdjacentCheckedOrNot(arr, sequence, isAdjacent);

  document.getElementById("num1").innerHTML = result;
}

function isAdjacentCheckedOrNot(arr, sequence, isAdjacent) {
  if (isAdjacent === false) {
    return isAdjacentNotChecked(arr, sequence);
  } else {
    return isAdjacentIsChecked(arr, sequence);
  }
}

function isAdjacentNotChecked(arr, sequence) {
  let arr2 = [];

  arr = arr.slice(arr.indexOf(sequence[0]));

  arr2 = sequence.filter((par) =>
    arr.includes(par) ? arr.splice(arr.indexOf(par), 1) : false
  );

  if (arr2.length === 0) {
    return "False";
  } else if (arr2.length !== sequence.length) {
    return "False";
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2.indexOf(sequence[i]) !== sequence.indexOf(sequence[i])) {
      return "False";
    }
  }

  return "True";
}

function isAdjacentIsChecked(arr, sequence) {
  let lengthOfArr = arr.length;

  let lengthOfSequence = sequence.length;

  let arr2 = [];

  let j = 0;

  for (let i = 0; i < lengthOfArr; i++) {
    if (arr[i] === sequence[j]) {
      arr2.push(arr[i]);

      j++;

      if (j > lengthOfSequence - 1) {
        return "True";
      }
    } else if (j > 0) {
      return "False";
    }
  }

  if (arr2.length !== lengthOfSequence) {
    return "False";
  }
}

let submit1Element = document.getElementById("submit1");

submit1Element.addEventListener("click", (e) => {
  e.preventDefault();

  htmlInput(); // hello
});
