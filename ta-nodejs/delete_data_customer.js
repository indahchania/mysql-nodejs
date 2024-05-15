var db = require("./db_config");

var sql = `delete from customer 
            where CUST_CODE='C00026'`

db.query(sql, function (err, result) {
    if (err) throw err
    console.log("data berhasil yang dihapus: " + result.affectedRows)
})