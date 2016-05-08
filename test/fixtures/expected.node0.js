"use strict";

var arr = [1, 2, 3];
arr[arr.length] = 5;

var func = function func() {
  return arr[arr.length] = 4, arr.length;
};
var func2 = function func2(arr) {
  return arr.push(4);
};

var arr2 = [1, 2, 3];
var func3 = function func3() {
  return arr2[arr2.length] = 4, arr2.length;
};

var arr3 = [1, 2, 3];
arr3 = { push: function push() {
    return console.log(123);
  } };
var func4 = function func4() {
  return arr3.push(4);
};

var arr4 = [1, 2, 3];
arr4 = [1, 2, 3, 4];
var func5 = function func5() {
  return arr4[arr4.length] = 4, arr4.length;
};

arr4.push();
arr4[arr4.length] = 1;
arr4.push(1, 2, 3);