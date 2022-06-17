const express = require("express");
const router = express.Router();
var getorders = require("../dao/orderdb/getorders");
var deleteorder = require("../dao/orderdb/deleteorder");
var buybook = require("../dao/orderdb/buybook");

//router.get是处理GET请求的方法，router.post是处理POST请求的方法
router.get("/getorders", async (req, res) => {
  //返回到浏览器的数据
  var id = req.query.seller_id;
  getorders(id, function (err, results) {
    if (err) {
      res.json({ data: [], message: "请求失败" });
    } else {
      res.json({ data: results, message: "请求成功" });
    }
  });
});

router.get("/deleteorder", async (req, res) => {
  //返回到浏览器的数据
  var id = req.query.order_id;
  deleteorder(id, function (err, results) {
    if (err) {
      res.json({ data: {}, message: "error" });
    } else {
      res.json({ data: {}, message: "success" });
    }
  });
});

router.get("/buy", async (req, res) => {
  var book_id = req.query.book_id;
  var book_name = req.query.book_name;
  var buyer_id = req.query.buyer_id;
  var buyer_name = req.query.buyer_name;
  var order_price = req.query.order_price;
  var seller_id = req.query.seller_id;
  var order_freight = req.query.order_freight;

  buybook(
    book_id,
    book_name,
    buyer_id,
    buyer_name,
    order_price,
    seller_id,
    order_freight,
    function (a1, a2) {
      res.json({ data: { info: a2 }, message: a1 });
    }
  );
});

module.exports = router;
