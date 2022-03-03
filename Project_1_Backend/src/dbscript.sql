CREATE DATABASE project_1;

CREATE TABLE employee_details(employee_id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY, first_name varchar(25), last_name varchar(25), address varchar(25), contact varchar(12), email varchar(25), username varchar(25), password varchar(25));

ALTER TABLE employee_details add column role varchar(10);


CREATE TABLE manager_details(manager_id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY, first_name varchar(25), last_name varchar(25), address varchar(25), contact varchar(12), email varchar(25), username varchar(25), password varchar(25));

ALTER TABLE manager_details add column role varchar(10);


CREATE TABLE reimbursement_details(reimbursment_id int GENERATED ALWAYS AS IDENTITY, employee_id int, reimbursement_amount float(2), reimbursement_reason varchar(250), reimbursement_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (reimbursment_id), FOREIGN KEY(employee_id) REFERENCES employee_details(employee_id));

