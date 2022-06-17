const userisexist = function (username, callback) {
  var mysql = require("mysql");
  var db = require("../../database/DBConfig");
  var connection = mysql.createConnection(db.mysql);

  connection.connect();
  connection.query(
    "SELECT count(*) as num FROM `users` WHERE `user_name`='" + username + "'",
    function (error, results, fields) {
      if (error) throw error;
      callback(error, results);
    }
  );
};

module.exports = userisexist;
