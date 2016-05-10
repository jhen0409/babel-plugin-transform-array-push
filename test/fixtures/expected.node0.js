"use strict";

var arr = [1, 2, 3];
arr[arr.length] = 5;

var func = function func() {
  return arr[arr.length] = 4, arr.length;
};
func();
var func2 = function func2(arr) {
  return arr.push(4);
};
func2([]);

var arr2 = [1, 2, 3];
var func3 = function func3() {
  return arr2[arr2.length] = 4, arr2.length;
};
func3();

var arr3 = [1, 2, 3];
arr3 = { push: function push() {
    return 1;
  } };
var func4 = function func4() {
  return arr3.push(4);
};
func4();

var arr4 = arr3 = [1, 2, 3];
arr4 = arr3 = [1, 2, 3, 4];
var func5 = function func5() {
  return arr4[arr4.length] = 4, arr4.length;
};
func5();

arr4.push();
arr4[arr4.length] = 1;
arr4.push(1, 2, 3);