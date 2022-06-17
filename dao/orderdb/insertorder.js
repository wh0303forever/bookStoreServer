const insertorder = function (
  book_id,
  book_name,
  order_price,
  order_freight,
  seller_id,
  buyer_id,
  buyer_name,
  date
) {
  var mysql = require("mysql");
  var db = require("../../database/DBConfig");
  var connection = mysql.createConnection(db.mysql);
  var gettime = require("../../util/gettime");
  var date = gettime();

  connection.connect();
  connection.query(
    "INSERT INTO `bookstore`.`order`(`book_id`, `book_name`, `order_price`, `order_freight`, `seller_id`, `buyer_id`, `buyer_name`, `date`, `is_deleted`)" +
      "VALUES (" +
      book_id +
      "," +
      "'" +
      book_name +
      "'," +
      order_price +
      "," +
      order_freight +
      "," +
      seller_id +
      "," +
      buyer_id +
      "," +
      "'" +
      buyer_name +
      "'," +
      "'" +
      date +
      "'," +
      "0)",
    function (error, results, fields) {
      if (error) throw error;
    }
  );
};

module.exports = insertorder;
