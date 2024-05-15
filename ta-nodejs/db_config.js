var mysql = require('mysql')

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ta_nodejs"
})

db.connect(function(error) {
    if (error){
        console.error(error)
    } else {
        console.info("Connected to Database")
    }
})

module.exports = db;