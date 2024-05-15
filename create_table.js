var db = require("./db_config_indahchania")

var sql = `create table member
(
    id int not null auto_increment,
    name varchar(255),
    address varchar(255),
    primary key (id)
)`

db.query(sql, function(err, result){
    if (err) throw err
    console.log("Table created!")
})