// QUESTIONS FOR OH SATURDAY W/ ALEX
// 1. Why are my prompt choices repeating?
// 2. Why are my console.tables coming back as undefined?
// 3. What does const { allowedNodeEnvironmentFlags } = require("process"); mean?


const inquirer = require("inquirer");
const mysql = require('mysql2');
const { allowedNodeEnvironmentFlags } = require("process");

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: 'goASAbetanu9*',
  database: 'employee_trackerDB'
});

connection.connect(err => {
  if (err) throw err;
  // console.log('connected as id ' + connection.threadId + '\n');
  mainMenu();
});

function mainMenu() {
    inquirer.prompt([
        {
            name: "main",
            type: "list",
            message: "What do you want to do?",
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee Role", "Exit"]
        }
    ])
    .then(response => {
        // console.log(response)
        switch (response.main) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add A Department":
                addDepartment();
                break;
            case "Add A Role":
                addRole();
                break;
            case "Add An Employee":
                addEmployee();
                break;
            case "Update An Employee Role":
                updateEmployeeRole();
                break;
            case "Exit":
                exit();
                break;
            default:
                mainMenu();
        }
    });
}

// THEN I am presented with a formatted table showing department names and department ids
function viewAllDepartments() {
    connection.query("SELECT * FROM departments", 
    (error, results) => {
        console.table(results);
        mainMenu();
    });
}

function viewAllEmployees() {
    connection.query("SELECT * FROM employees", 
    (error, results) => {
        console.table(results);
        mainMenu();
    });
}

//THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function viewAllRoles() {
    connection.query("SELECT * FROM roles", 
    (error, results) => {
        console.table(results);
        mainMenu();
    });
}

// THEN I am prompted to enter the name of the department and that department is added to the database
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Department Name",
            name: "title"
        }
    ])
        .then(response => {
            connection.query("INSERT INTO departments SET ?",
                [response], (error, results) => {
                    // console.log(results);
                    mainMenu();
                })
        })
}

// THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Employee's First Name",
            name: "firstName"
        },
        {
            type: "input",
            message: "Enter Employee's Last Name",
            name: "lastName"
        },
        {
            type: "input",
            message: "Enter Employee's Role",
            name: "jobTitle"
        },
        {
            type: "input",
            message: "Enter Employee's Manager",
            name: "manager"
        }
    ])
        .then(response => {
            connection.query("INSERT INTO employees SET ?",
                [response], (error, results) => {
                    // console.log(results);
                    mainMenu();
                })
        })
}

// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Role Name",
            name: "jobTitle"
        },
        {
            type: "input",
            message: "Enter Salary",
            name: "salary"
        },
        {
            type: "input",
            message: "Enter Department",
            name: "department"
        }
    ])
        .then(response => {
            connection.query("INSERT INTO roles SET ?",
                [response], (error, results) => {
                    // console.log(results);
                    mainMenu();
                })
        })

}

// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
function updateEmployeeRole() {
    connection.query("SELECT * FROM employees", (error, results) => {
        inquirer.prompt([
            {
                type: "list",
                name: "updateMe",
                message: "Who do you want to update?",
                choices: results.map(employees => `${employees.id}:${employees.firstName}`)
            },
            {
                type: "list",
                name: "jobTitle",
                message: "To what role?",
                choices: results.map(roles => `${roles.id}:${roles.jobTitle}`)
            }
        ])
            .then(response => {
                // console.log(response);
                let role = response.jobTitle.split(":")[1];
                let id = response.updateMe.split(":")[0];
                // console.log(id);
                connection.query("UPDATE FROM employees SET ? WHERE ?", [
                    { role },
                    { id }
                ], (error, results) => {
                    // console.log(results);
                    mainMenu();
                })
            })
    })
}
function updateEmployeeRole() {
    connection.query("SELECT * FROM employees", (error, results) => {
        inquirer.prompt([
            {
                type: "list",
                name: "updateMe",
                message: "Who do you want to update?",
                choices: results.map(employees => `${employees.id}:${employees.firstName} ${employees.lastName}`)
            },
            {
                type: "list",
                name: "newRole",
                message: "Change their role to:",
                choices: results.map(roles => `${roles.jobTitle}`)
            }
        ])
        .then(response => {
            console.log(response);
            let role = response.newRole;
            let id = response.updateMe.split(":")[0];
            console.log(id);
            connection.query("UPDATE FROM employees SET ? WHERE ?", [
                { role },
                { id }
            ], (error, results) => {
                console.log(results);
                mainMenu();
            })
        })
    })
}



function exit() {
    connection.end();
}