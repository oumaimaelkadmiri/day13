const unsortedArray = [7, 9, 3, 5, 15, 18, 0];

const selectionSort = arr => {
    const len = arr.length;
  
    for (let i = 0; i < n; i++) {
      let indexOfMin = i;
  
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[indexOfMin]) indexOfMin = j
          
        }
  
      if (minIndex !== i) {
        // Swap elements
        const temp = arr[indexOfMin];
        arr[minIndex] = arr[i];
        arr[i] = temp;
      }
    }
  
    return arr;
  };
  selectionSort(arr);
  console.log(arr)
  ////////////////////////////////////////////////////////////////////////////////////////////
  
  const unsortedArr = [70, 20, 18, 10, 51, 12, 85];

  function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      // Last i elements are already in place, so we don't need to check them
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements if they are in the wrong order
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  

  
  console.log("Unsorted Array:", unsortedArr);
  console.log("Sorted Array:", sortedArray);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Example usage
const numbers = [4, 2, 8, 1, 6, 5, 7, 3];
const NbrElement = 6;

  const unsortedArra = [88, 34, 18, 12, 16, 11, 90];
  const sortedArray = insertionSort(unsortedArra.slice()); // Create a copy of the array before sorting

  function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      const currentElement = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  console.log("Unsorted Array:", unsortedArra);
  console.log("Sorted Array:", sortedArray);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

  function linearSearch(array, Nbr) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === Nbr) {
            return i; // Return the index if Nbr is found
        }
    }
    return -1; // Return -1 if Nbr is not found in the array
}

const position = linearSearch(numbers, NbrElement);

if (position !== -1) {
    console.log(`The Nbr element ${NbrElement} is found at position ${position}.`);
} else {
    console.log(`The Nbr element ${NbrElement} is not found in the array.`);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function countZerosInMatrix(matrix) {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) {
              count++;
          }
      }
  }

  return count;
}

// Example usage
const matrix = [
  [0, 1, 0, 0],
  [0, 0, 2, 0],
  [3, 0, 0, 4]
];

const zeroCount = countZerosInMatrix(matrix);
console.log(`The count of occurrences of "0" in the matrix is: ${zeroCount}`);
