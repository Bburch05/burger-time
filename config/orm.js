
var connection = require("../config/connection.js")

var orm = {
    selectAll : function(table,callback){
    var query = "SELECT * FROM ??"
    connection.query(query,[table],function(err,data){
    if(err) throw err
    callback(data)
    })
    },
    
    insertOne : function(table,valObject,callback){
    var query = "INSERT INTO ?? SET ?"
    connection.query(query,[table,valObject],function(err,data){
    if (err) throw err;
    callback(data);
    })
    },

    updateOne : function(table,columnToUpdate,updatedValue,colToSearch,valToSearch,callback){
    var query = "UPDATE ?? SET ?? = ? where ?? = ?"
    connection.query(query,[table,columnToUpdate,updatedValue,colToSearch,valToSearch],function(err,data){
    if (err) throw err
    callback(data);
    });
    }
}

module.exports = orm;
