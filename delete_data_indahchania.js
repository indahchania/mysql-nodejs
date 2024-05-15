var db = require("./db_config_indahchania")

var sql = `delete from member where id = 16`

db.query(sql, function (err, result) {
    if (err) throw err
    console.log("number of records deleted: " + result.affectedRows)
})