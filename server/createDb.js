const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

connection.query("CREATE DATABASE vfairs", function (err, results) {
  if (err) console.log(err);
  else console.log("База данных создана");
});

connection.end();