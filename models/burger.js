// * Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm.js")
//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(val, cb) {
      orm.insertOne("burgers", { burgerName: val} , function(res) {
        cb(res);
      });
    },
    update: function(colUpdate, newValue, id, cb) {
      orm.updateOne("burgers",colUpdate, newValue, "id", id, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;
  
//     * Export at the end of the `burger.js` file.