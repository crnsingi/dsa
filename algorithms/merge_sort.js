const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]; // array to sort 

function mergeSortTopDown(array) { // top-down implementation
    if(array.length < 2){          // if the array has one value, return the array 
        return array;
    }

const middle = Math.floor(array.length / 2); // Find the middle of the array
const left = array.slice(0, middle); // and the arrays with all the values left
const right = array.slice(middle); // add right if the middle value

// Keep on slicing the array(s) into the smaller arrays, until you only have arrays containing one element
return mergeSortTopDown(mergeSortTopDown(left), mergeSortTopDown(right)); 
}

function mergeTopDown(left, right){
    const array = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
           // Check which value is higher, If the left right's value is higher,
           // push the left item to the array, as lowest values come first in the array . 
           array.push(left.shift());
        } else { 
            array.push(right.shift());
        }
    }
    return array.concat(left.slice()).concat(right.slice());
}