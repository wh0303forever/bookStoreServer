const updatepassword = function (id, password, callback) {
  var mysql = require("mysql");
  var db = require("../../database/DBConfig");
  var connection = mysql.createConnection(db.mysql);

  connection.connect();
  connection.query(
    "UPDATE `users` SET `user_password`='" +
      password +
      "' WHERE `user_id`=" +
      id,
    function (error, results, fields) {
      if (error) throw error;
      callback(error, results);
    }
  );
};

module.exports = updatepassword;
