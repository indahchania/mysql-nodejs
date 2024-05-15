var db = require("./db_config_indahchania")

var sql = "select id,name,address from member order by name limit 6;";

db.query(sql, function (err, result) {
    if (err) throw err;

    console.log(`ID \t NAME \t\t ADDRESS`);
    console.log(`-------------------------------`)
    result.forEach((mbr) => {
        console.log(`${mbr.id} \t ${mbr.name} \t ${mbr.address}`);
    })
})
