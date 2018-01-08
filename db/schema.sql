CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id INTEGER(10) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    DATE date,
    PRIMARY KEY (id)
);
