var db = require("./db_config_indahchania")

const sql = `update member
            set address='Jl. Kalisombo No.18, Salatiga'
            where id=15`
db.query(sql, function (err,result) {
    if(err) throw err;
    console.log(result.affectedRows + " record(s) updated")
})