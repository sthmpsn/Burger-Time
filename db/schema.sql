-- Create the database burgers_db and specified it for use.
DROP DATABASE IF EXISTS d8ynq9ut1qy7ut8c;

-- Using d8ynq9utqy7ut8c  instead of "burgers_db" since that's what Heroku named the DB
CREATE DATABASE d8ynq9ut1qy7ut8c;        
USE d8ynq9ut1qy7ut8c;

-- Create the table burgers.
CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id)
);