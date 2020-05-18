// 'use strict';  /* Деректива (мы пишем на стандарте ES6) */


// var number = 5;
// var string = 'Hello!';
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};


// console.log(4 / 0);
// console.log('string' * 90);


// let something;
// console.log(something)


// let person = {
//   name: 'Serghei',
//   age: '27',
//   isMarried: true
// }

// console.log(person['name']);


// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

// console.log(arr[0]);

// // alert('Hello World');

// /* let answer = confirm('Are you here?');

// console.log(answer); */


// // let answer = +prompt('Есть ли вам 18?', 'Да');

// // console.log(typeof(answer));

// // console.log('arr' + ' - object');
// // console.log(4 + ' - object');



// let incr = 10,
//     decr = 10;



// console.log(incr++);
// console.log(decr--);

// console.log(5%2);
// console.log('2' == 2);

// let isChecked = true,
//     isClose = false;


// console.log(isChecked && isClose);  /* И */
// console.log(isChecked || isClose);  /* Или */


let num = 50;

if (num < 49) {
  console.log('Неверно!')
} else if (num > 100) {
  console.log('Много!')
} else {
  console.log('Верно!')
}

//Тернарный оператор
(num == 50) ? console.log('Верно!'): console.log('Неверно!')


switch (num) {
  case num < 49:
    console.log('Неверно!');
    break;
  case num > 100:
    console.log('Много!');
    break;
  case num > 80:
    console.log('Все еще много!');
    break;
  case 50:
    console.log('Верно!');
    break;
  default:
    console.log('Что-то пошло не так!');
    break;
}