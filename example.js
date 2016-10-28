function Person(array) {
    this.Employee = array[0];
    this.ID = array[1];
    this.salary = array[2];
    this.score = array[3];
}

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var atticus = new Person(arrayAtticus);
var jem = new Person(arrayJem);
var boo = new Person(arrayBoo);
var scout = new Person(arrayScout);

console.log(atticus);
//console.log(atticus.salary);
//console.log(jem.Employee);

var employeeList = [atticus, jem, boo, scout];

for(var i = 0; i < employeeList.length; i++){
  console.log(employeeList[i]);
}
