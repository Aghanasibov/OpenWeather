// Task 1
// const myObj = {
//   fullname: 'John',
//   age: 23,
//   married: true,
//   job: 'Developer',
// };
// const myArray = [];
// myArray.push(myObj);
// console.log(myArray);

// 
// const Obj1 = {
//   fullname: 'Calvin',
//   age: 22,
//   married: false,
//   job: 'developer',
// };
// const Obj = `you need ${Obj1.fullname},${Obj1.age},${Obj1.married},${Obj1.job}`;
// console.log(Obj);

// task2

// const obj={
//     name:"John",
//     age:34,
//     job:"developer",

// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.job);

// task3

// const parhp = document.querySelector('#parhp');
// const userData = {
//   name: parhp.dataset.name,
//   age: parhp.dataset.age,
//   job: parhp.dataset.job,
// };
// console.log(userData.name);
// console.log(userData.age);
// console.log(userData.job);

// console.log(userData);

// task4
// const obj1 = {
//     fullname: "John Doe",
//     age: 22,
//   };
  
//   const obj2 = {
//     fullname: "Marry Perry",
//     age: 28,
//   };
  
//   function monitor() {
//     console.log("this is", this.fullname + " " + this.age);
//   }
  

//   monitor.call(obj1); 
//   monitor.call(obj2); 
// task5

// const obj1 = {
//     fullname: "John Doe",
//     age: 22,
  
//     monitor(num) {
//       console.log("this is", this.fullname + " " + this.age + " " + num);
//       console.log("obj2 values:", obj2.fullname + " " + obj2.age);
//     },
//   };
  
//   const obj2 = {
//     fullname: "Marry Perry",
//     age: 28,
//   };
  
//   obj1.monitor(5);

// task6


// class Person {
//     constructor(name = 'Akif', email = 'Akif@gmail.com', age = '20') {
//       this.name = name;
//       this.email = email;
//       this.age = age;
//     }
  
//     getNameOfObject() {
//       console.log(this.name);
//     }
//   }
  
//   const newPerson = new Person("ddd", 'Akif@gmail.com', 20);
//   newPerson.getNameOfObject(); // "ddd"
  

class Cashback {
    constructor() {
      this.cashbacks = [];
    }
  
    calcCash(expense) {
      const cashbackAmount = expense * 0.03; // 3% cashback
      this.cashbacks.push(cashbackAmount);
      alert(`Cashback earned: $${cashbackAmount.toFixed(2)}`);
    }
  
    showCashbackList() {
      const cashbackListElement = document.getElementById('cashbackList');
      cashbackListElement.innerHTML = ''; 
  
      if (this.cashbacks.length === 0) {
        cashbackListElement.innerHTML = '<li>No cashback earned yet.</li>';
        return;
      }
  
      this.cashbacks.forEach(cashback => {
        const listItem = document.createElement('li');
        listItem.textContent = `Cashback: $${cashback.toFixed(2)}`;
        cashbackListElement.appendChild(listItem);
      });
    }
  }
  
  const cashback = new Cashback();
  
  function calculateCashback() {
    const expenseInput = document.getElementById('expense');
    const expense = parseFloat(expenseInput.value);
    cashback.calcCash(expense);
  }
  
  function showCashbackList() {
    cashback.showCashbackList();
  }
  



  

  
