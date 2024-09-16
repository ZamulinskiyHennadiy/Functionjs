
//Створюю функцію, яка буде виводити кількість переданих їй аргументів.
function countArguments(...args) {
  console.log(arguments.length);

  countArguments(5, 6, 7, 8);
}

//Пишу функцію, яка приймає 2 числа і повертає :
function compareNumbers(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
console.log(compareNumbers(5, 10));

//Пишу функцію, яка обчислює факторіал переданого їй числа.
function mergeDigits(a, b, c) {
  return parseInt(`${a}${b}${c}`);
}
console.log(mergeDigits(5, 8, 10));

//Пишу функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
function calculateArea(length, width = length) {
  return length * width;
}
console.log(calculateArea(5, 30,));