var db = require("./db_config");

const sql = `UPDATE customer 
            SET CUST_NAME='Bambang'
            WHERE CUST_CODE='C00026'`
db.query(sql, function (err, result) {
    if(err) throw err;
    console.log(result.affectedRows + "data telah diupdate")
})