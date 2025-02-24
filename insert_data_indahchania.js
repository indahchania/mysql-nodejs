var db = require("./db_config_indahchania")

var sql = "insert into member (name, address) values ?"
var values = [
    ["Gamelab Indonesia", "Jalan Kalisombo Salatiga"],
    ["JS Coffee", "Highway 71"],
    ["Apple Cafe", "Apple st 652"],
    ["Laravel Coffee", "Mountain 21"],
    ["Nodejs Cafe", "Valley 345"],
    ["PHP Hotel", "Ocean blvd 2"],
    ["One Cafe", "Green Grass 1"],
    ["Richard bar", "Sky st 331"],
    ["Susan Cafe", "One way 98"],
    ["Vicky Club", "Yellow garden 2"],
    ["Ben Resto", "park lane 38"],
    ["William Company", "Central st 954"],
    ["Chuck Food", "Main Road 989"],
    ["Viola Coffee", "Sideway 1633"],
    ["3AM Coffee", "Lowstreet 4"],
]

db.query(sql, [values], function (err, result) {
    if (err) throw err
    console.log("Number of records inserted: " + result.affectedRows)
})