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
  database: 'ice_creamDB'
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId + '\n');
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
        console.log(response)
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

function viewAllDepartments() {

}

function viewAllEmployees() {

}

function viewAllRoles() {

}

function addDepartment() {

}

function addEmployee() {

}

function addRole() {

}

function updateEmployeeRole() {

}

function exit() {
    connection.end();
}