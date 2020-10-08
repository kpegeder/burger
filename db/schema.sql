-- Delete and Create an empolyee database
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

-- Use Employee db
USE burgers_db;

-- Create tables
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
