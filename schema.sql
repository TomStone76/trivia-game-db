CREATE DATABASE trivia_db;

USE trivia_db;

CREATE TABLE questions (
    id INTEGER AUTO_INCREMENT,
    question VARCHAR(100) NOT NULL,
    answer BOOLEAN NOT NULL,
    PRIMARY KEY id
);