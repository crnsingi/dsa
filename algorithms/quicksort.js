const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]; // array to sort

function quicksort(array, left, right) { // Find the left and right side of the currently active pivot.
    left = left || 0;
    right = right || array.length - 1;

    const pivot = partitionHoare(array, left, right);

    if(left < pivot -1 ) {
        quicksort(array, left, pivot - 1);
    }
    if(right > pivot) {
        quicksort(array, pivot, right);
    }
    return array;
}