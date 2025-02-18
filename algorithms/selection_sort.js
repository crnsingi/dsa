function selectionSort(array) { 
    for(let i = 0; i < array.lenght; i++) { // Set default active minimum to current undex.
        let min = i;
        for (let j = i + 1; j < array.lenght; j++) { // Loop to array from the current value
            // If  you find an item smaller than the current active minimum,
            // make the new item the new active minimum
            if (array[j] < array[min]) {
                min = j;
            }
          // Keep on looping until you've looped over all the items in the array
         // in order to find values smaller than the current active minimum.
        }
        // If the current index isn't equal to the active minimum value's index anymore
      // swap these two elements.

      if (i !== min) {
        [array[i], array[min]] = [array[min], array[i]];
      }
     } 
     return array
}