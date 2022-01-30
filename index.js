// START 1 TASK

// function arrAdd() {
//  let bank = [];
//  while (true) {
//   const question = prompt("Enter some text");
//   if (question === null || question === "") {
//    bank.pop();
//   } else {
//    bank.push(question);
//   }
//   console.log(bank);
//  }
// }
// arrAdd();

// END 1 TASK

// START 2 TASK

// function hundred() {
//  const vault = [];
//  for (let i = 1; i <= 100; i++) {
//   vault.push(i);
//  }
//  console.log(vault);
//  const newVault = vault.map(function (item, index, array) {
//   return item * 3;
//  });
//  console.log(newVault);
// }
// hundred();

// END 2 TASK

// ClassWork

// function array() {
//  let strings = [];
//  let numbers = [];
//  let count = 0;
//  let isConfirm = true;

//  while (true) {
//   let question = prompt("Choose: word or number");
//   const isNumber = +question;
//   if (isNaN(isNumber)) {
//    strings.push(question);
//   } else {
//    numbers.push(question);
//   }
//   if (count % 5 === 0 && count != 0) {
//    isConfirm = confirm("Continue or not?");
//   }
//   if (!isConfirm) {
//    break;
//   }
//   count++;
//  }
//  console.log(strings);
//  console.log(numbers);
// }
// array();

////////////////////////////////////////////////////////////////////////////////////

// let string =
//  "Lorem ipsum fuck suck dolor sit amet, consectetur adipisicing elit. Expedita praesentium nemo fuck suck totam quibusdam natus nesciunt tempora nam. Harum rem molestias repudiandae accusamus ab, esse nihil officiis explicabo iste.";

// function filtration(str) {
//  let arr = str.split(" ");
//  let filtered = arr.filter(words);
//  function words(result) {
//   if (result !== "fuck" && result !== "suck") {
//    return result;
//   }
//  }
//  return filtered.join(" ");
// }
// filtration(string);

// const result = filtration(string);
// console.log(result);

// /////////////////////////////////////////////////////////////////////////////////

// function capitalize(str) {
//  let arr = str.split(" ");
//  let newArr = arr.map(function (item) {
//   return item.charAt(0).toUpperCase() + item.slice(1);
//  });
//  const capitalString = newArr.join(" ");
//  console.log(capitalString);
// }
// const string =
//  "Lorem ipsum fuck suck dolor sit amet, ae ae ae ae ae ae ae a ea ea ea consectetur adipisicing elit. Expedita praesentium nemo fuck suck totam quibusdam natus nesciunt tempora nam. Harum rem molestias repudiandae accusamus ab, esse nihil officiis explicabo iste.";

// capitalize(string);

// сделать функцию, которая возмет все лишки и будет каждые 3 секунды менять цвет начиная с 1 и до последней и потом очищать интервал.

// const elements = document.getElementsByTagName("li");
// function paints() {
//  let index = 0;
//  const intervalId = setInterval(() => {
//   elements[index].style.backgroundColor = "indigo";
//   index++;
//   if (index >= elements.length) {
//    clearInterval(intervalId);
//   }
//  }, 100);
// }

// paints();

// const numbers = [1, 2, 3, 4, 5];
// function map(array, callback) {
//  const result = [];
//  array.reduce(function (previous, current, index, arr) {
//   previous.push(callback(current, index, arr));
//   return previous;
//  }, result);
//  return result;
// }

// console.log(map(numbers, (item) => item * 3));

// function filter(array, callback) {
//  const result = [];
//  array.reduce(function (previous, current, index, arr) {
//   if (callback(current, index, arr)) {
//    previous.push(current);
//   }
//   return previous;
//  }, result);
//  return result;
// }
// console.log(filter(numbers, (item) => item > 3));

// function some(array, callback) {
//  const result = array.reduce(function (previous, current, index, arr) {
//   if (!previous) {
//    return callback(current, index, arr);
//   }
//   return previous;
//  }, false);
//  return result;
// }
// console.log(some(numbers, (item) => item > 6));

// function info(additional) {
//  return `${this.name} ${this.age} ${additional}`;
// }
// const obj = {
//  name: "Vlad",
//  age: 24,
//  info: info,
// };

// const obj2 = {
//  name: "Bohdan",
//  age: 22,
//  info: info,
// };
// console.log(obj.info("test"));
// console.log(obj2.info("test"));
// Object.defineProperties()

// const obj = {
//  firstName: "Vlad",
//  lastName: "Onopr",
//  get fullName() {
//   return `${this.firstName} ${this.lastName}`;
//  },
//  set fullName(value) {
//   const strings = value.split(" ");
//   this.firstName = strings[0];
//   this.lastName = strings[1];
//  },
// };
// console.log(obj.fullName);

// const user = {
//  address: {
//   street: {
//    test: "test",
//   },
//  },
// };
// const key = "address";
// const address = user?.[key]?.street?.test;

// function People(firstName, lastName, age) {
//  this.firstName = firstName;
//  this.lastName = lastName;
//  this.age = age;
//  this.isAdmin = false;
// }

// const vladyslav = new People("Vlad", "Onoprienko", 24);
// console.log(vladyslav);

// const obj = {
//  items: [],
//  get some() {
//   return `${this.items}`;
//  },
//  set some(param) {
//   const result = param.push();
//  },
// };

// console.log(obj.some);
// obj.some = "test";

// const lis = document.getElementsByTagName("li");

// for (let key in lis) {
//  if (typeof lis[key] === "object") {
//   if (lis[key].matches(".check")) {
//    lis[key].style.backgroundColor = "red";
//   } else {
//    lis[key].style.backgroundColor = "blue";
//   }
//  }
// }

// document.querySelector(".div"); // css селектор. возвращает первый элемент
// document.querySelectorAll(".div"); // css селектор. возвращает мертвую коллекцию
// document.getElementById("div"); // строкой id, возвращант один элемент
// document.getElementsByTagName("div"); // строкой название тега, возвращаент живую
// document.getElementsByClassName("div"); // строкой название класса, возвращает живую
// document.getElementsByName("div"); // строкой название name, возвращант живую

// const element = document.getElementsByClassName(".li")[0];
// element.style; // большой объект со всеми стилями
// element.style.backgroundCOlor;
// element.style.color;
// element.style.fontSize;

// element.classList;
// element.classList.add("test");
// element.classList.remove("test");
// element.classList.contains("test");
// element.classList.toggle("test"); // переключает true false

// element.contains(".div");
// element.matches(".div");

// element.innerText;
// element.innerText = "test";

// element.innerHTML;
// element.innerHTML = "test";
// element.innerHTML = "<p>test</p>";
// element.outerHTML;

// element.value = "test";
// element.type = "";
// element.id;
// element.hidden;

// element.href = "";

// element.hasAttribute("aria-label");
// element.getAttribute("class");
// element.setAttribute("class, test");
// element.removeAttribute("class");

// const link = document.createElement("a");
// link.innerText = "ссылка в google";
// link.href = "https://google.com/";
// link.classList.add("testClass");
// link.style.color = "red";

const button = document.querySelector(".btn");

function toggleScrollbar() {
 document.body.classList.toggle("hidden");
}

function showModal(text) {
 const wrapperElem = document.createElement("div");
 wrapperElem.classList.add("modal");
 const contentElem = document.createElement("div");
 contentElem.classList.add("modal__content");
 const textElem = document.createElement("p");
 textElem.innerText = text;
 const buttonElem = document.createElement("button");
 buttonElem.innerText = "Close";
 buttonElem.addEventListener("click", () => {
  closeModal(wrapperElem);
  toggleScrollbar();
 });
 wrapperElem.addEventListener("click", () => {
  closeModal(wrapperElem);
 });
 contentElem.append(textElem);
 wrapperElem.append(contentElem);
 contentElem.append(buttonElem);

 document.body.append(wrapperElem);
 toggleScrollbar();
 //  setTimeout(() => {
 //   wrapperElem.remove();
 //   toggleScrollbar();
 //  }, 5000);
}

function closeModal(elem) {
 elem.remove();
 toggleScrollbar();
}
button.addEventListener("click", () => {
 showModal("Alert");
});
