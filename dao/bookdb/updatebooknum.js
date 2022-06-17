const updatebooknum = function (id, num) {
  var mysql = require("mysql");
  var db = require("../../database/DBConfig");
  var connection = mysql.createConnection(db.mysql);

  connection.connect();
  connection.query(
    "UPDATE `books` SET `book_num`=" + num + " WHERE `book_id`=" + id,
    function (error, results, fields) {
      if (error) throw error;
    }
  );
};

module.exports = updatebooknum;
