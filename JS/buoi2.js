// môi trường node.js

/**
 * khi khao báo 1 biến bằng từ khoá const thì sẽ không được gán lại giá trị mới
 * scope: phạm vi của biến đó
 * var: phạm vi của nó sẽ là global
 * let, const: phạm vi của nó block scope
 */


/**
 * data types in javascript
 * primitive(nguyên thuỷ): Number, String, Boolean, Null, Undefined, Symbol, Bigint
 * rerference(tham chiếu): Object, Array, Function
 */

// var varialbeGlobal = 'global nè'
// let numberOfFunctionMain = 'ahihi'
// function main() {
//     let numberOfFunctionMain = 1
//     console.log('varialbeGlobal', varialbeGlobal)
//     console.log('numberOfFunctionMain function Main', numberOfFunctionMain)
// }

// console.log(varialbeGlobal)
// main()
// console.log('numberOfFunctionMain', numberOfFunctionMain)

// // primitive
// var age = 10
// var name = "Trình"
// var isChecked = true
// var empty = null
// var abc;

// // reference
// //object
// var student = {
//     name: 'Trình',
//     age: '24'
// }

// // array
// var arrNumber = [1, 2, 3, 4, 5]
// var arrName = ['A', 'B', 'C']

// var a = 1
// var b = 2

// function tinhTongHaiSo(numberOne, numberTwo) {
//     return numberOne + numberTwo
// }

// console.log(tinhTongHaiSo(a, b))


// // operator in JS
// // + - * / %
// // == ===
// // &&, ||, !

// // so sánh == và ===

// // luôn luôn sử dụng ===
// var numberOne = 1 // number
// var numberTwo = '1' // string

// console.log(numberOne === numberTwo)


// hoisting js

// code chúng ta khai báo
// console.log(jsHoisting)
// var jsHoisting = 10
// console.log(jsHoisting)

// // khi thực thi code
// var jsHoisting; // undefined
// console.log(jsHoisting)
// jsHoisting = 10
// console.log(jsHoisting)


// let jsHoistingB
// console.log(jsHoistingB)
// jsHoistingB = 'ahihi đồ ngốc'
// console.log(jsHoistingB)


// for loop và while

// for loop thì chúng ta có thể xác định số lần chạy chạy
// while thì kh xác định dc số lần chạy


// từ 1 đến 100 -> sẽ chạy 100 lần
// for (var index = 1; index <= 100; index++) {
//     console.log(index);
// }

// in các số từ 1 đến 5
// let index = 1

// while (index <= 5) {
//     console.log(index)
//     index++
// }

// let password;

// while (password !== '12345') {
//     password = prompt('Nhập password')
// }

// console.log('Đăng nhập thành công')

// if else, switch case, toán tử ba ngôi

// kiểm tra số chẳn lẽ
/**
 * input: chúng ta có 1 con số đầu vào 1, 2, 3
 * các bước thực thi: 1, 2, 3 chia lấy dư cho 2
 * nếu số đầu chia lấy cho 2 = 0 thì số chẳn, còn ngược lại thì nó là số lẻ
 */

// let userNumber = 2
// if (userNumber % 2 === 0) console.log(userNumber + ' là số chẳn')
// else console.log(userNumber + ' là số lẻ')

// toán tử 3 ngôi
// let result = userNumber % 2 === 0 ? console.log(userNumber + ' là số chẳn') : console.log(userNumber + ' là số lẻ')

// xếp loại hạng cho học sinh
/**
 nếu điểm >= 9 -> đỉnh mẹ
 nếu điểm >=8 và điểm <= 9 -> giỏi
 nếu điểm >=6.5 và điểm <= 7.9 -> khá
 còn lại trung bình.
 */

// let score = 4

// if (score > 9 && score <= 10) {
//     console.log('đỉnh mẹ')
// } else if (score >= 8 && score <= 9) {
//     console.log('học giỏi')
// } else if (score >= 6.5 && score <= 7.9) {
//     console.log('khá')
// } else {
//     console.log('trâu bò')
// }


// kiểm tra ngày trong tuần

// const dayOfWeek = 5

// switch (dayOfWeek) {
//     case 2:
//         console.log('thứ 2')
//         break
//     case 3:
//         console.log('thứ 3')
//         break
//     case 4:
//         console.log('thứ 4')
//         break
//     default:
//         console.log('không có thứ này tồn tại')
// }


// const a = 1
// const b = 2

// const result = a + b

// console.log(result)

// function tinhTong(numberOne = 0, numberTwo = 0) {
//     return numberOne + numberTwo
// }

// console.log(tinhTong(1, 2))

// const tinhTong = function (numberOne = 0, numberTwo = 0) {
//     return numberOne + numberTwo
// }

const tinhTong = (numberOne = 0, numberTwo = 0) => numberOne + numberTwo

console.log(tinhTong(1, 2))
