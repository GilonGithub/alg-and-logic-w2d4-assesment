// Write a function that takes in an array, and sorts the first
// half of the array in ascending order, and the second half 
// of the array in descending order

// you may use methods for this. 

let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6, 7]

let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45]


const halfSorted = function(arr) {

    let secondHalf = arr.slice(Math.floor((arr.length)/2), arr.length);
    arr = arr.slice(0, Math.floor((arr.length)/2));

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


    arr = insertionSort(arr);
    secondHalf = insertionSort(secondHalf).reverse();

    arr = arr.concat(secondHalf);
    return arr;

};


console.log(halfSorted(arr1));

//results --> [2, 4, 8, 34, 54, 78, 567, 99, 77, 45, 23, 7, 6]

console.log(halfSorted(arr2));

//results --> [3, 4, 56, 65, 98, 90, 68, 58, 45, 34, 12]