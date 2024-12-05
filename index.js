


const employee = {
    name: "Edith",
    streetAddress: "Nairobi",
  };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}
 function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam",
    employee.streetAddress = "12 Broadway";
        
       return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}


function  destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}
 