"use strict";

const arr = [1, 2, 3];
arr[arr.length] = 5;

const func = () => (arr[arr.length] = 4, arr.length);
const func2 = arr => arr.push(4);

let arr2 = [1, 2, 3];
const func3 = () => (arr2[arr2.length] = 4, arr2.length);

let arr3 = [1, 2, 3];
arr3 = { push: () => console.log(123) };
const func4 = () => arr3.push(4);

let arr4 = [1, 2, 3];
arr4 = [1, 2, 3, 4];
const func5 = () => (arr4[arr4.length] = 4, arr4.length);

arr4.push();
arr4[arr4.length] = 1;
arr4.push(1, 2, 3);