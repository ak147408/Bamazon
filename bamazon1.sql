DROP DATABASE if exists bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (

id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NULL,
dept_name VARCHAR(45) NULL,
price DECIMAL(10,2) NULL,
quantity INT NULL,
PRIMARY KEY (id)
  
);

 
INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("Pizza", "Frozen Foods", 5.50, 50);
 
INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("Iphone", "Electronics", 800.69, 20);

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("Nos Energy Drink", "Beverages", 2.58, 100);

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("Playstation 4", "Electronics", 434.57, 58);
 
INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("Lebron Soldier X", "Shoes", 120.00, 23);

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("Dodge Challenger", "Cars", 25000.47, 1);

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("Baby Formula", "Babies", 39.99, 156);

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("Propane Grill", "Outdoors", 249.99, 45);

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("4K TV", "Electronics", 700.00, 15);

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("Tent", "Outdoors", 89.95, 19);
 