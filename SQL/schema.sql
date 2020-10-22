DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDB;
USE employee_trackerDB;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(45) NULL,
  lastName VARCHAR (45) NULL,
  jobTitle VARCHAR (100),
  department VARCHAR (100),
  manager VARCHAR (100),
  salary INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE departments (
    departmentId INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (100),
    PRIMARY KEY (departmentId)
);

CREATE TABLE roles (
    roleId INT NOT NULL AUTO_INCREMENT,
    jobTitle VARCHAR (100),
    department VARCHAR (100),
    salary INT NULL,
    PRIMARY KEY (roleId)
);