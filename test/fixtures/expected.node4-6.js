"use strict";

const arr = [1, 2, 3];
arr[arr.length] = 5;

const func = () => (arr[arr.length] = 4, arr.length);
func();
const func2 = arr => arr.push(4);
func2([]);

let arr2 = [1, 2, 3];
const func3 = () => (arr2[arr2.length] = 4, arr2.length);
func3();

let arr3 = [1, 2, 3];
arr3 = { push: () => 1 };
const func4 = () => arr3.push(4);
func4();

let arr4 = arr3 = [1, 2, 3];
arr4 = arr3 = [1, 2, 3, 4];
const func5 = () => (arr4[arr4.length] = 4, arr4.length);
func5();

arr4.push();
arr4[arr4.length] = 1;
arr4.push(1, 2, 3);