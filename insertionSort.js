// write a insertion sort algorithm based on the video shown in class.
// should take in an array, and sort it into ascending order using 
// insertion sorting logic

let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6, 7];

let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45];


const insertionSort = function(arr) {

    for(i = 1; i < arr.length; i++){
        let current = arr[i];
        let position = i;

        while(position > 0 && arr[position-1] > current) {
                arr[position] = arr[position-1];
                arr[position-1] = current;
                position -= 1;
        }

    }

    return arr;
};

console.log(insertionSort(arr1));

console.log(insertionSort(arr2));