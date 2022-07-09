CREATE TABLE transactions(
    id INT PRIMARY KEY,
    sender TEXT NOT NULL,
    receiver TEXT NOT NULL,
    amount FLOAT NOT NULL,
    timestamp TEXT NOT NULL
);

CREATE SEQUENCE transaction_seq INCREMENT 1 START 1;

-- this file was used to initialize the table and it's called manually from psql
-- you can use the following commands to create table before running the server
-- 1- connect to psql using "psql command"
-- 2- create database : "create database uniswap"
-- 3- connect to the database: "\c uniswap"
-- 4- execute seeds.sql: "\i /PATH/OF/seeds.sql"