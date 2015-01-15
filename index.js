function Employee () {
  this.name = "";
  this.dept = "general";
}

function Manager () {
  this.reports = [];
}
Manager.prototype = new Employee;

function WorkerBee () {
  this.projects = [];
}
WorkerBee.prototype = new Employee;

function SalesPerson () {
   this.dept = "sales";
   this.quota = 100;
}
SalesPerson.prototype = new WorkerBee;

function Engineer () {
   this.dept = "engineering";
   this.machine = "";
}
Engineer.prototype = new WorkerBee;

var drew = new Engineer;
var mark = new WorkerBee;

// console.log(Engineer.prototype === drew.__proto__);  // true
// console.log(Object.getPrototypeOf(drew) === drew.__proto__); // true
// console.log(mark === drew.__proto__);  // false

console.log(Employee.prototype);
Employee.prototype.specialty = "none";
console.log(Employee.prototype);
