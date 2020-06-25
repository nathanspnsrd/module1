var employees = [];

function Employee(Name, JobTitle, Salary, Status) {
    this.Name = Name;
    this.JobTitle = JobTitle;
    this.Salary = Salary;
    this.Status = "Full Time";
    this.printEmployeeForm = function () {
        console.log("My name is, " + this.Name + ". I am a " + this.JobTitle + ". I earn " + this.Salary + ". I work " + this.Status)
    }
}

var employee1 = new Employee("Nathan", "Student", "$0/day")
var employee2 = new Employee("Celine", "Interpreter", "$1,000/day")
var employee3 = new Employee("Austin", "TA", "Super Top Secret", "Part Time")
employee3.Status = "Part Time";

// printEmployeeForm(employee1);
// printEmployeeForm(employee2);
// printEmployeeForm(employee3);
employee1.printEmployeeForm()
employee2.printEmployeeForm()
employee3.printEmployeeForm()

employees.push(employee1);
employees.push(employee2);
employees.push(employee3);
console.log(employees)