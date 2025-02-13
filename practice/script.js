// pass by reference

function modifyObject(obj) {
  obj.name = 'John';
}

const details = {name:"Alex"};
modifyObject(details);
console.log("After pass by reference",details); // {name: "John"}

const employee = {
      id: 1,
      employee_id: 23456
};

const copyOfEmployee = employee;
copyOfEmployee.id = 3456;
copyOfEmployee.city = 'Ramghar';
employee.number = '99153444123';

console.log(employee)
console.log(copyOfEmployee)