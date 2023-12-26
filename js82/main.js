// const users = ['Alex', 'Mike', 'John', 'Anna']
// const numbers = [1, 3, 5]
// function chekcForCopyItem(array, item) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === item) {
//       return `Hello ${item}`
//     }
//   }
//   return `Goodbye item`
// }
// console.log(chekcForCopyItem(users, 'Alex'))

const numbers = [2, 4, 7, 9, 10, 14, 17]
const numbers2 = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
    numbers2.push(numbers[i])
    }
  }

console.log(numbers2)


// function calculator(firstNumber, secondNumber, operator) {
//   if (operator === '+') {
//     return firstNumber + secondNumber
//   }
//   if (operator === '-') {
//     return firstNumber -   secondNumber
//   }
//   if (operator === '*') {
//     return firstNumber * secondNumber
//   }
//   if (operator === '/' && secondNumber != 0) {
//     return firstNumber / secondNumber
//   }
//   else {
//     return 'false'
//   }
// }

// console.log(calculator(4, 0, '/'))