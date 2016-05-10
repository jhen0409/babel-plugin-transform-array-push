const arr = [1, 2, 3]
arr.push(5)

const func = () => arr.push(4) // Will transform
func()
const func2 = arr => arr.push(4)
func2([])

let arr2 = [1, 2, 3]
const func3 = () => arr2.push(4) // Will transform
func3()

let arr3 = [1, 2, 3]
arr3 = { push: () => 1 }
const func4 = () => arr3.push(4)
func4()

let arr4 = [1, 2, 3]
arr4 = [1, 2, 3, 4]
const func5 = () => arr4.push(4) // Will transform
func5()

arr4.push()
arr4.push(1) // Will transform
arr4.push(1, 2, 3)