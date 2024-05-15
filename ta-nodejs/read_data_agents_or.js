var db = require("./db_config");

var sql = "SELECT * FROM agents where COMMISSION LIKE '%0.11%' OR COMMISSION LIKE '%0.14%';"

db.query(sql, function(err, result) {
    if (err) throw err;
    console.log(`AGENT_CODE \tAGENT_NAME \t\t\tWORKING_AREA \t\tCOMMISSION \tPHONE_NO \t\tCOUNTRY`);
    result.forEach((agent) => {
        console.log(`${agent.AGENT_CODE.padEnd(8)} \t${agent.AGENT_NAME.padEnd(24)} \t${agent.WORKING_AREA.padEnd(15)} \t${agent.COMMISSION.toString().padEnd(10)} \t${agent.PHONE_NO.padEnd(14)} \t${agent.COUNTRY}`);
    });
});
