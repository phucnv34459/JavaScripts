// const arr = [28, 38, 44, 29, 109];
// arr.push(100);
// console.log(arr);


// let x;
// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'rasberry'];
// fruits.push(berries);
// console.log(fruits);

// x = fruits[3][1];
// console.log(x);
// concat() - Concatenate arrays
// x = fruits.concat(berries);
// x = [...fruits, ...berries];
// x = [...fruits];//clone một mảng
// const a=fruits;
// a.push("cc");
// console.log({fruits});
// const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
// x = arr.flat();
// console.log(arr);
// console.log(x);

// const a = 1;
// const b = 2;
// const c = 3;

// x = Array.of(a, b, c);

// console.log(x);

// const arr = [1, 2, 3, 4, 5];
// arr.push(6);   // Thêm phần tử 6 vào cuối mảng
// arr.unshift(0); // Thêm phần tử 0 vào đầu mảng
// arr.reverse();  // Đảo ngược thứ tự của các phần tử trong mảng
// console.log(arr);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// // Solution 1
// const arr3 = arr1.slice(0, 4).concat(arr2);

// // Solution 2
// const arr4 = [...arr1, ...arr2];
// arr4.splice(4, 1);

// console.log(arr4);

// let x;
// const person = {
//   name: 'John Doe',
//   age: 30,
//   isAdmin: true,
//   address: {
//     street: '123 Main st',
//     city: 'Boston',
//     state: 'MA',
//   },
//   hobbies: ['music', 'sports'],
// };

// // Thay đổi giá trị thuộc tính name
// person.name = 'Jane Doe';

// // Thay đổi giá trị thuộc tính isAdmin
// person['isAdmin'] = false;

// // Xóa thuộc tính age
// delete person.age;

// // Thêm thuộc tính hasChildren
// person.hasChildren = true;

// // Thêm phương thức greet
// person.greet = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// // Gọi phương thức greet
// person.greet();



// const person2 = {
//   'first name': 'Brad',
//   'last name': 'Traversy',
// };

// x = person2['first name'];

// console.log(x);

// const firstName = 'John';
// const lastName = 'Doe';
// const age = 30;

// const person = {
//   firstName,
//   lastName,
//   age,
// };

// console.log(person.age);

// const post = {
//     id: 1,
//     title: 'Post One',
//     body: 'This is the body',
//   };
  
//   // Chuyển thành chuỗi JSON
//   const str = JSON.stringify(post);
  
//   console.log(str.id);
  
//   // Phân tích JSON
//   const obj = JSON.parse(str);
  
//   console.log(obj.id);
  
//   const posts = [
//     {
//       id: 1,
//       title: 'Post One',
//       body: 'This is the body',
//     },
//     {
//       id: 2,
//       title: 'Post Two',
//       body: 'This is the body',
//     },
//   ];
  
//   const str2 = JSON.stringify(posts);
  
//   console.log(str2);

// Tạo một mảng library chứa thông tin về các cuốn sách và trạng thái của chúng.
const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Mockingjay',
      author: 'Suzanne Collins',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  
  // Gán giá trị true cho thuộc tính read của trạng thái cho mỗi cuốn sách trong mảng library. Bây giờ, tất cả các cuốn sách đều được đánh dấu là đã đọc (read).
  library[0].status.read = true;
  library[1].status.read = true;
  library[2].status.read = true;
  
  // Sử dụng destructuring để gán giá trị của thuộc tính title của cuốn sách đầu tiên trong mảng library vào biến firstBook.
  const { title: firstBook } = library[0];
  
  console.log(firstBook);
  
  // Chuyển đổi mảng library thành chuỗi JSON bằng cách sử dụng JSON.stringify(). Kết quả được gán vào biến libraryJSON.
  const libraryJSON = JSON.stringify(library);
  
  console.log(libraryJSON);

