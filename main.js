// const ulEl = document.querySelector("ul");

// for (let i = 0; i < 10; i += 1) {
//   const li = document.createElement("li");
//   li.textContent = `list-${i + 1}`;

//   if ((i + 1) % 2 === 0) {
//     li.addEventListener("click", function () {
//       console.log(li.textContent);
//     });
//   }
//   ulEl.appendChild(li);
// }

// 화살표 함수
// Arrow Function

// const double = function (x) {
//   return x * 2;
// };
// console.log(double(7));

// const doubleArrow = (x) => ({
//   heropy: "age 33",
// });
// console.log(doubleArrow(7));

// IIFE (Immediately Invoked Function Expression)
// 즉시 실행 함수

// const a = 7;

// const double = function (x) {
//   console.log(a * 2);
// };

// double();

// (function () {
//   console.log(a * 2);
// })();

// Hoisting 호이스팅
// 선언된 함수가 위로 끌어올려지는 현상

// console.log(double(7));

// const double = function (x) {
//   return x * 2;
// };

// console.log(double(7));

// console.log(double(7));

// function double(x) {
//   return x * 2;
// }

// 타이머 함수

// setTimeout()
// setInterval()
// clearTimeout()
// clearInterval()

// const timer = setInterval(function () {
//   console.log("HEROPY");
// }, 500);

// const h1El = document.querySelector("h1");
// h1El.addEventListener("click", () => {
//   clearInterval(timer);
// });

// callback

// function timeout(cb) {
//   setTimeout(() => {
//     console.log("HEROPY!");
//     cb();
//   }, 300);
// }

// timeout(() => {
//   console.log("Done!");
// });

// ****************************************
// 상속 (확장)

// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name;
//     this.wheel = wheel;
//   }
// }

// const myVehicle = new Vehicle("자동차", 4);
// console.log(myVehicle);

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel);
//   }
// }

// const myBicycle = new Bicycle("삼천리", 2);
// const daughtersBicycl = new Bicycle("세발", 3);
// console.log(myBicycle);
// console.log(daughtersBicycl);

// class Car extends Vehicle {
//   constructor(name, wheel, lisence) {
//     super(name, wheel);
//     this.lisence = lisence;
//   }
// }

// const myCar = new Car("벤틀리", 4, true);
// const wifesCar = new Car("소나타", 4, false);

// console.log(myCar, wifesCar);

const a = "Hello world!";
console.log(a);

b = a.slice(0, 3);
console.log(b);

c = "     Hello, World!     ".trim();
console.log(c);
