var mysql = require('mysql')

var db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_gamelab"
})

db.connect(function(error) {
    if (error){
        console.error(error)
    } else {
        console.info("Connected to Database")
    }
})

module.exports = db;