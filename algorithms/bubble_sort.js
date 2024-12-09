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
                //Set the current item to the next item, and the next item to be current item.
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                //Set swapped to true, do-while loop will still run
                swapped = true;

            }
        }
    } while(swapped);
 }