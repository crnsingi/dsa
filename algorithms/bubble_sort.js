 function bubbleSort(array) {
    let swapped;
    do { 
        swapped = false; // set var swapped to false as default value.
        // Loop over array
        for(let i = 0; i < array.length; i++){
            // If the array has the current value and the next value
            // and the current value is bigger than the next value:
            // the two values need to be swapped (assuming you want the items)
            // to be incrementally sorted).'
            if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];  //Set the current item to the next item, and the next item to be current item.
                swapped = true;                                       //Set swapped to true, do-while loop will still run
            }
        }
    } while(swapped);
    return array; // return the array with the swapped values.
 }