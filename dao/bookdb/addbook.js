const addbook = function (
  book_name,
  book_price,
  book_freight,
  book_img,
  book_introduction,
  book_num,
  user_id,
  callback
) {
  var mysql = require("mysql");
  var db = require("../../database/DBConfig");
  var connection = mysql.createConnection(db.mysql);

  connection.connect();
  connection.query(
    "INSERT INTO `bookstore`.`books`(`book_name`, `book_price`, `book_freight`, `book_img`, `book_introduction`, " +
      "`book_num`, `user_id`, `is_deleted`)" +
      "VALUES ('" +
      book_name +
      "'," +
      book_price +
      "," +
      book_freight +
      ",'" +
      book_img +
      "','" +
      book_introduction +
      "'," +
      book_num +
      "," +
      user_id +
      ",0" +
      ")",
    function (error, results, fields) {
      if (error) throw error;
      callback(error, results);
    }
  );
};

module.exports = addbook;
