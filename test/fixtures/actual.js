const arr = [1, 2, 3]
arr.push(5)

const func = () => arr.push(4)
const func2 = arr => arr.push(4)

let arr2 = [1, 2, 3]
const func3 = () => arr2.push(4)

let arr3 = [1, 2, 3]
arr3 = { push: () => console.log(123) }
const func4 = () => arr3.push(4)

let arr4 = [1, 2, 3]
arr4 = [1, 2, 3, 4]
const func5 = () => arr4.push(4)
