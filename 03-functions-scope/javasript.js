// function sayHello(name = "phucnv", age = 19){


//     console.log(`hello cac ban ${name} toi bao nhieu ${age} tuoi`);
// }
// sayHello();


// function registerUser(user = 'Bot') {
    
//    return user + ' is registered';
//   }
  
//   console.log(registerUser());


// function sum(...numbers) {
//     let total = 0;
  
//     for (const num of numbers) {
//       total += num;
//     }
  
//     return total;
//   }
  
//   console.log(sum(1, 2, 3, 4, 5, 6, 100));


//   //khởi tạo một mảng
//  function getRandom(arr) {
//   // random ra một số bất kì trong mảng
//     const randomIndex = Math.floor(Math.random() * arr.length);
//   // gán số bất kì vào biến item
//     const item = arr[randomIndex];
//   //in ra 
//     console.log(item);
//   }
  
//   getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// const x = 100;
// console.log(x, 'in global'); // 100 'in global'
// function run() {
//     console.log(window.innerHeight); //chiều cao của cửa sổ trình duyệt
//     console.log(x, 'in function'); // 100 'in function'
//   }
  
//   run();



// if (true) {
//     console.log(x, 'in block');
//   }
  
//   function add() {
//     const x = 1;
//     const y = 50;
//     console.log(x + y);
//   }
//   add();


//   const x = 100;
// if (true) {
//   console.log(x);//100
//   const y = 200;
//   console.log(x + y);//300
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(i); //in ra các số từ 0 đến 10
//   }


// if (true) {
//     const a = 500;
//     let b = 600;
//     var c = 700;
//   }
  
//   console.log(c);//700


// function run() {
//     var d = 100;
//     console.log(d);//100
//   }
  
//   run();


//   function first() {
//     const x = 100;
//     function second() {
//       const y = 200;
//       console.log(x + y); //300
//     }
//     second();
//   }
//   first();

// if (true) {
//     const x = 100;
  
//     if (x === 100) {
//       const y = 200;
//       console.log(x + y);//300
//     }
//   }



// function addDollarSign(value) {
//     return '$' + value;//gán thêm $
//   }
//   console.log(addDollarSign(100));//$100
//   const addPlusSign = function (value) {
//     return '+' + value;//gán thêm +
//   };
  
//   console.log(addPlusSign(200));//+200


// const add = (a, b) => {
//     return a + b;//trả về tổng của hai số a và b
//   };

// const subtract = (a, b) => a - b; // trả về hiệu của a,b ko cần dùng return

// const double = (a) => a * 2;const double: Khai báo một hằng số tên là double để lưu trữ biểu thức hàm.
// (a) =>: Cú pháp của arrow function, nhận một tham số a.
// a * 2;: Biểu thức này trực tiếp trả về kết quả của phép nhân giữa a và 2.


// (function () {
//     const user = 'John';
//     console.log(user); //John
//     const hello = () => console.log('Hello from the IIFE');//Hello from the IIFE
//     hello();
//   })();
  
//   // Params
//   (function (name) {
//     console.log('Hello ' + name);//Hello Shawn
//   })('Shawn');
  
//   // Named IIFE (Can only be called recursively)
//   (function hello() {
//     console.log('Hello');//Hello
//   })();

// const getCelsius = (f) => ((f - 32) * 5) / 9;//chuyển độ f sang c
// console.log(`The temp is ${getCelsius(35)} \xB0C `);//The temp is 1.6666666666666667 °C 


// function minMax(arr) {
//     const min = Math.min(...arr);//số nhỏ nhất trong mảng
//     const max = Math.max(...arr);//số lớn nhất
  
//     return {
//       min,
//       max,
//     };
//   }
  
//   console.log(minMax([2, 31, 4, 5, 6]));

  
//   ((length, width) => { //20,10
//     const area = length * width;//20*10
  
//     const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
  
//     console.log(output);//`The area of a rectangle with a length of 20 and a width of 10 is 200.
//   })(20, 10);


const x = 100;
const y = 50;
function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}
const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);//150,15

function first() {
    console.log('first...');
  }
  
  function second() {
    console.log('second...');
  }
  
  function third() {
    console.log('third...');
  }
  
  first();
  second();
  third();
  






  

