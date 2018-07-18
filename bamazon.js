var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon_db"
  });

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to buy?",
        choices: [
          "1, Pizza, $5.50",
          "2, iPhone, $800.69",
          "3, Nos Energy Drink, $2.50",
          "4, Playstation 4, $434.47",
          "5, Lebron Solider X, 120.00",
          "6, Dodge Challenger, $25000.47",
          "7, Baby Formula, $39.99",
          "8, Propane Grill, 249.99",
          "9, 4K TV, $700.00",
          "10, Tent, $89.95"

        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "1, Pizza, $5.50":
          pizza();
          break;
  
        case "2, iPhone, $800.69":
          iphone();
          break;
  
        case "3, Nos Energy Drink, $2.50":
          nos();
          break;
  
        case "4, Playstation 4, $434.47":
          playstation();
          break;
        
        case "5, Lebron Solider X, 120.00":
          lebron();
          break;

        case "6, Dodge Challenger, $25000.47":
          dodge();
          break;

        case "7, Baby Formula, $39.99":
          baby();
          break;

        case "8, Propane Grill, 249.99":
          propane();
          break;

        case  "9, 4K TV, $700.00":
          tv();
          break;

        case "10, Tent, $89.95":
          tent();
          break;
        }
      });
  }

function Pizza() {
    inquirer
      .prompt({
        name: "amount",
        type: "input",
        message: "How many Pizzas would you like to buy?"
      })
      .then(function(answer) {

      
        var query = "SELECT product_name, quantity FROM products WHERE ?";
        connection.query(query, { product_name: "Pizza" }, function(err, res) {

          console.log(res)
          //from the quantity returned = res.quanitity - answer.amount
          var quanitity = res.quanitity - answer.amount

          
          
          //mysql update pizza inside here

        
          
          start();
        });
      });
  }

function iPhone() {
  inquirer
    .prompt({
      name: "amount",
      type: "input",
      message: "How many iPhones would you like to buy?"
    })
    .then(function(answer) {

      var query = "SELECT product_name, quantity FROM products WHERE ?";
      connection.query(query, { product_name: "iPhone" }, function(err, res) {

        console.log(res)
          //from the quantity returned = res.quanitity - answer.amount
        var quanitity = res.quanitity - answer.amount
          
          start();
        });
      });
  }

  function NosEnergyDrink() {
    inquirer
      .prompt({
        name: "amount",
        type: "input",
        message: "How many cans of Nos would you like to buy?"
      })
      .then(function(answer) {
  
        var query = "SELECT product_name, quantity FROM products WHERE ?";
        connection.query(query, { product_name: "NosEnergyDrink" }, function(err, res) {
  
          console.log(res)
            //from the quantity returned = res.quanitity - answer.amount
          var quanitity = res.quanitity - answer.amount
            
            start();
          });
        });
    }
function Playstation4() {
  inquirer
    .prompt({
      name: "amount",
      type: "input",
      message: "How many PS4s would you like to buy?"
    })
      .then(function(answer) {
    
      var query = "SELECT product_name, quantity FROM products WHERE ?";
      connection.query(query, { product_name: "Playstation 4" }, function(err, res) {
    
        console.log(res)
              //from the quantity returned = res.quanitity - answer.amount
            var quanitity = res.quanitity - answer.amount
              
            start();
    });
  });
}
function LebronSoldierX() {
  inquirer
    .prompt({
      name: "amount",
      type: "input",
      message: "How many pairs would you like to buy?"
    })
    .then(function(answer) {

      var query = "SELECT product_name, quantity FROM products WHERE ?";
      connection.query(query, { product_name: "Lebron Solider X" }, function(err, res) {

        console.log(res)
          //from the quantity returned = res.quanitity - answer.amount
        var quanitity = res.quanitity - answer.amount
          
          start();
        });
      });
  }
function iPhone() {
  inquirer
    .prompt({
      name: "amount",
      type: "input",
      message: "How many iPhones would you like to buy?"
    })
    .then(function(answer) {
  
      var query = "SELECT product_name, quantity FROM products WHERE ?";
      connection.query(query, { product_name: "iPhone" }, function(err, res) {
  
        console.log(res)
            //from the quantity returned = res.quanitity - answer.amount
        var quanitity = res.quanitity - answer.amount
            
          start();
        });
      });
  }
function DodgeChallenger() {
  inquirer
    .prompt({
      name: "amount",
      type: "input",
      message: "How many cars would you like to buy?"
    })
    .then(function(answer) {
  
      var query = "SELECT product_name, quantity FROM products WHERE ?";
      connection.query(query, { product_name: "Dodge Challenger" }, function(err, res) {
  
        console.log(res)
            //from the quantity returned = res.quanitity - answer.amount
        var quanitity = res.quanitity - answer.amount
            
          start();
        });
      });
  }

function BabyFormula() {
  inquirer
    .prompt({
      name: "amount",
      type: "input",
      message: "How much formula would you like to buy?"
    })
    .then(function(answer) {
  
      var query = "SELECT product_name, quantity FROM products WHERE ?";
      connection.query(query, { product_name: "Baby Formula" }, function(err, res) {
  
        console.log(res)
            //from the quantity returned = res.quanitity - answer.amount
        var quanitity = res.quanitity - answer.amount
            
          start();
        });
      });
  }
function PropaneGrill() {
  inquirer
    .prompt({
      name: "amount",
      type: "input",
      message: "How many iPhones would you like to buy?"
    })
    .then(function(answer) {
  
      var query = "SELECT product_name, quantity FROM products WHERE ?";
      connection.query(query, { product_name: "iPhone" }, function(err, res) {
  
        console.log(res)
            //from the quantity returned = res.quanitity - answer.amount
        var quanitity = res.quanitity - answer.amount
            
           start();
        });
      });
  }

function tv() {
  inquirer
    .prompt({
       name: "amount",
      type: "input",
      message: "How many 4K TVs would you like to buy?"
    })
    .then(function(answer) {
  
      var query = "SELECT product_name, quantity FROM products WHERE ?";
      connection.query(query, { product_name: "4K TV" }, function(err, res) {
  
        console.log(res)
            //from the quantity returned = res.quanitity - answer.amount
        var quanitity = res.quanitity - answer.amount
            
          start();
        });
      });
  }

function tent() {
  inquirer
    .prompt({
      name: "amount",
      type: "input",
      message: "How many tents would you like to buy?"
    })
    .then(function(answer) {
  
      var query = "SELECT product_name, quantity FROM products WHERE ?";
      connection.query(query, { product_name: "tents" }, function(err, res) {
  
        console.log(res)
            //from the quantity returned = res.quanitity - answer.amount
        var quanitity = res.quanitity - answer.amount
        
          
        
            
          start();
        });
      });
  }
// //if else statement for the insufficiant quantity for the purchases. 
//   if (answer.amount > res.quantity) {
//     console.log("Insufficiant Supply!");
//   } else {
//     console.log ("Congratulations on your purchase!")
//   }
// //function to handle total cost of purchases
// function totalCost () {
//   answer.amount + res.quantity
//   console.log("Your total is" + totalCost);
// }

//Had to comment out the if else statement and the total cost function because it stopped my program from working