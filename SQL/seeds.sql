-- INSERT INTO employees (firstName, lastName, jobTitle, department, manager, salary) values ('John', 'Doe', 'Sales Lead', 'Sales', 'Ashley Rodriguez', 100000);
-- INSERT INTO employees (firstName, lastName, jobTitle, department, manager, salary) values ('Mike', 'Chan', 'Salesperson', 'Sales', 'John Doe', 80000);
-- INSERT INTO employees (firstName, lastName, jobTitle, department, manager, salary) values ('Ashley', 'Rodriguez', 'Lead Engineer', 'Engineering', null, 150000);
-- INSERT INTO employees (firstName, lastName, jobTitle, department, manager, salary) values ('Kevin', 'Tupik', 'Software Engineer', 'Engineering', 'Ashley Rodriguez', 120000);
-- INSERT INTO employees (firstName, lastName, jobTitle, department, manager, salary) values ('Malia', 'Brown', 'Accountant', 'Finance', null, 125000);
-- INSERT INTO employees (firstName, lastName, jobTitle, department, manager, salary) values ('Sarah', 'Lourd', 'Legal Team Lead', 'Legal', null, 250000);
-- INSERT INTO employees (firstName, lastName, jobTitle, department, manager, salary) values ('Tom', 'Allen', 'Lawyer', 'Legal', 'Sarah Lourd', 190000);
-- INSERT INTO employees (firstName, lastName, jobTitle, department, manager, salary) values ('Christian', 'Eckenrode', 'Lead Engineer', 'Engineering', 'Mike Chan', 150000);
-- INSERT INTO employees (firstName, lastName, jobTitle, department, manager, salary) values ('Tammer', 'Galal', 'Software Engineer', 'Engineering', 'Kevin Tupik', 120000);

-- job title, role id, the department that role belongs to, and the salary for that role
INSERT INTO roles (jobTitle, department, salary)
values ("Sales Lead", "Sales", 100000);
INSERT INTO roles (jobTitle, department, salary)
values ("Salesperson", "Sales", 80000);
INSERT INTO roles (jobTitle, department, salary)
values ("Lead Engineer", "Engineering", 150000);
INSERT INTO roles (jobTitle, department, salary)
values ("Software Engineer", "Engineering", 120000);
INSERT INTO roles (jobTitle, department, salary)
values ("Accountant", "Finance", 125000);
INSERT INTO roles (jobTitle, department, salary)
values ("Legal Team Lead", "Legal", 250000);
INSERT INTO roles (jobTitle, department, salary)
values ("Lawyer", "Legal", 190000);

INSERT INTO departments (title)
values ("Sales");
INSERT INTO departments (title)
values ("Engineering");
INSERT INTO departments (title)
values ("Finance");
INSERT INTO departments (title)
values ("Legal");