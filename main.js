// 1-masalaa
// class Triangle {
//   #leftSide;
//   #rightSide;
//   #width;

//   getLeftSide() {
//     return this.#leftSide;
//   }
//   getRightSide() {
//     return this.#rightSide;
//   }
//   getWidth() {
//     return this.#width;
//   }
//   setSides(a, b, c) {
//     this.#leftSide = a;
//     this.#rightSide = b;
//     this.#width = c;
//   }
// }

// const tr1 = new Triangle();
// tr1.setSides(3, 4, 5);
// console.log(tr1.getLeftSide());
// console.log(tr1.getRightSide());
// console.log(tr1.getWidth());
// 2-masala
// class Employee {
//   #id;
//   #firstName;
//   #lastName;
//   #salary;

//   constructor(id, firstName, lastName, salary) {
//     this.#id = id;
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.#salary = salary;
//   }

//   getId() {
//     return this.#id;
//   }

//   getFirstName() {
//     return this.#firstName;
//   }

//   getLastName() {
//     return this.#lastName;
//   }

//   getSalary() {
//     return this.#salary;
//   }

//   setId(id) {
//     this.#id = id;
//   }

//   setFirstName(firstName) {
//     this.#firstName = firstName;
//   }

//   setLastName(lastName) {
//     this.#lastName = lastName;
//   }

//   setSalary(salary) {
//     this.#salary = salary;
//   }

//   getFullName() {
//     return `${this.#firstName} ${this.#lastName}`;
//   }

//   getAnnualSalary() {
//     return this.#salary * 12;
//   }

//   raiseSalary(percent) {
//     this.#salary += this.#salary * (percent / 100);
//   }
// }

// const employee = new Employee(1, "Bobur", "Sobir", 5000);

// console.log(employee.getId()); // 1
// console.log(employee.getFirstName());
// console.log(employee.getLastName());
// console.log(employee.getSalary());
// console.log(employee.getFullName());
// console.log(employee.getAnnualSalary());

// employee.raiseSalary(10);
// console.log(employee.getSalary());
// /////////
// 3-masaaa
// class CustomDate {
//   #day;
//   #month;
//   #year;

//   constructor(day, month, year) {
//     this.#day = day;
//     this.#month = month;
//     this.#year = year;
//   }

//   getDay() {
//     return this.#day;
//   }

//   getMonth() {
//     return this.#month;
//   }

//   getYear() {
//     return this.#year;
//   }

//   setDay(day) {
//     this.#day = day;
//   }

//   setMonth(month) {
//     this.#month = month;
//   }

//   setYear(year) {
//     this.#year = year;
//   }

//   getISODate() {
//     const formattedDay = this.#day < 10 ? `0${this.#day}` : this.#day;
//     const formattedMonth = this.#month < 10 ? `0${this.#month}` : this.#month;
//     return `${formattedDay}-${formattedMonth}-${this.#year}`;
//   }
// }
// const date = new CustomDate(12, 5, 2023);
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getYear());

// date.setDay(15);
// date.setMonth(10);
// date.setYear(2024);

// console.log(date.getISODate())
// 8 - masalal;
// class CustomDate {
//   #day;
//   #month;
//   #year;

//   constructor(day, month, year) {
//     this.#day = day;
//     this.#month = month;
//     this.#year = year;
//   }

//   static customKeys(obj) {
//     return Object.keys(obj);
//   }

//   static customValues(obj) {
//     return Object.values(obj);
//   }

//   static customEntries(obj) {
//     return Object.entries(obj);
//   }
// }

// const obj = { a: 1, b: 2, c: 3 };
// console.log(CustomDate.customKeys(obj)); // ["a", "b", "c"]
// console.log(CustomDate.customValues(obj)); // [1, 2, 3]
// console.log(CustomDate.customEntries(obj)); // [["a", 1], ["b", 2], ["c", 3]]
// 9- masala
// class CustomArray {
//   #array;

//   constructor(arr) {
//     if (!Array.isArray(arr) || arr.some((item) => typeof item !== "number")) {
//       throw new Error("Massiv faqat raqamlardan iborat bo`lishi kerak");
//     }
//     this.#array = arr;
//   }

//   static isNumberArray(arr) {
//     return Array.isArray(arr) && arr.every((item) => typeof item === "number");
//   }

//   static sum(arr) {
//     if (!CustomArray.isNumberArray(arr)) {
//       throw new Error("Massiv faqat raqamlardan iborat bo`lishi kerak");
//     }
//     return arr.reduce((acc, val) => acc + val, 0);
//   }

//   static max(arr) {
//     if (!CustomArray.isNumberArray(arr)) {
//       throw new Error("Massiv faqat raqamlardan iborat bo`lishi kerak");
//     }
//     return Math.max(...arr);
//   }

//   static min(arr) {
//     if (!CustomArray.isNumberArray(arr)) {
//       throw new Error("raqamlar bo`lishi kerak");
//     }
//     return Math.min(...arr);
//   }
// }
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, "three", 4, 5];

// console.log(CustomArray.isNumberArray(arr1));
// console.log(CustomArray.isNumberArray(arr2));

// console.log(CustomArray.sum(arr1));
// console.log(CustomArray.max(arr1));
// console.log(CustomArray.min(arr1));

// try {
//   console.log(CustomArray.sum(arr2));
// } catch (error) {
//   console.error(error.message);
// }
