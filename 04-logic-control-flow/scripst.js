// if (true) {
//     console.log('This is true');
//   }
  
//   if (false) {
//     console.log('This is NOT true');
//   }

// const x = 10;
// const y = 5;

// if (x >= y) {
//   console.log(`${x} is greater than or equal to ${y}`);
// }

// if (x === y) {
//   console.log(`${x} is equal to ${y}`);
// } else {
//   console.log(`${x} is NOT equal to ${y}`);
// }

// if (x !== y) {
//     const z = 20;
//     console.log(`${z} is 20`);
//   }

//   if (x >= y)
//   console.log(`${x} is greater than or equal to ${y}`),
//     console.log('This is true');


// const d = new Date(10, 30, 2022, 6, 0, 0);//ngày 10 tháng 30 năm 2022 và thời gian là 6 giờ 0 phút 0 giây.
// const hour = d.getHours();

// if (hour < 12) {
//   console.log('Good Morning');
// } else if (hour < 18) {
//   console.log('Good Afternoon');
// } else {
//   console.log('Good Night');
// }


// const d = new Date(2022, 1, 10, 19, 0, 0);
// const month = d.getMonth();
// const hour = d.getHours();

// switch (month) {
//   case 1:
//     console.log('It is January');
//     break;
//   case 2:
//     console.log('It is February');
//     break;
//   case 3:
//     console.log('It is March');
//     break;
//   default:
//     console.log('It is not Jan, Feb or March');
// }
// switch (true) {
//     case hour < 12:
//       console.log('Good Morning');
//       break;
//     case hour < 18:
//       console.log('Good Afternoon');
//       break;
//     default:
//       console.log('Good Night');
//   }


// const x = function () {};

// if (x) {
//   console.log('This is truthy');
// } else {
//   console.log('This is falsy');
// }

// console.log(Boolean(x));


// console.log(10 < 20 && 30 > 15 && 40 > 30); //  true
// console.log(10 > 20 || 30 < 15); // false

// let a;

// // a = 10 && 20; //20
// // a = 10 && 20 && 30; //30
// // a = 10 && 0 && 30; //0
// // a = 10 && '' && 0 && 30;//rỗng

// console.log(a);

// let a = null;

// // if (!a) {
// //   a = 10;
// // }

// // a = a || 10;

// a ||= 10;

// console.log(a);//10


// let b = 10;

// if (b) {
//   b = 20;
// }

// b = b && 20;

// b &&= 20;

// console.log(b);//20

// let c = null;

// if (c === null || c === undefined) {
//   c = 20;
// }

// c = c ?? 20;

// c ??= 20;

// console.log(c);//20


const age = 17;
// if (age >= 18) {
//   console.log('You can vote!');
// } else {
//   console.log('You can not vote');//in ra dòng này
// }
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');
const canVote = age >= 18 ? true : false;
console.log(canVote);
