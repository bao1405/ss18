"use strict";
const swapElements = (arr, index1, index2) => {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Chỉ số nằm ngoài giới hạn");
    }
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
};
const arr1 = [1, 2, 3, 4, 5];
console.log(swapElements(arr1, 1, 3));
const arr2 = ["apple", "banana", "orange"];
console.log(swapElements(arr2, 0, 2));
