var employees = [];

function employee(Name, JobTitle, Salary, Status) {
    this.Name = Name;
    this.JobTitle = JobTitle;
    this.Salary = Salary;
    this.Status = "Full Time";
    function printEmployeeForm() {
        console.log(employees)
    }
}

var employee1 = new employee("Nathan", "Student", "$0/day")
var employee2 = new employee("Celine", "Interpreter", "$1,000/day")
var employee3 = new employee("Austin", "TA", "Super Top Secret", "Part Time")

var newArr = employees.concat(employee3)
console.log(newArr)