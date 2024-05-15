var db = require("./db_config");

var sql = `insert into customer(CUST_CODE, CUST_NAME, CUST_CITY, WORKING_AREA, CUST_COUNTRY, GRADE, OPENING_AMT, RECEIVE_AMT, PAYMENT_AMT, OUTSTANDING_AMT, PHONE_NO, AGENT_CODE)
            VALUES ('C00026', 'Lisa', 'Jakarta', 'Jakarta', 'Indonesia', '2', '5000', '4000', '7000', '3000', 'HAHAHAH', 'A004')`;

db.query(sql, function (err, result) {
    if(err) throw err;
    console.log("berhasil menambahkan 1 data")
})