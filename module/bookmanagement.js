const express = require("express");
const router = express.Router();
var getbooks = require("../dao/bookdb/getbooks");
var getbookInfo = require("../dao/bookdb/getbookInfo");
var getbookofuser = require("../dao/bookdb/getbookofuser");
var deletebook = require("../dao/bookdb/deletebook");
var addbook = require("../dao/bookdb/addbook");

//router.get是处理GET请求的方法，router.post是处理POST请求的方法
router.get("/getbooks", async (req, res) => {
  //返回到浏览器的数据
  getbooks(function (err, results) {
    if (err) {
      res.json({ data: {}, message: "请求失败" });
    } else {
      res.json({ data: results, message: "请求成功" });
    }
  });
});

router.get("/getbookInfo", async (req, res) => {
  //返回到浏览器的数据
  var id = req.query.id;
  console.log(id);
  getbookInfo(id, function (err, results) {
    if (err) {
      res.json({ data: {}, message: "请求失败" });
    } else {
      res.json({ data: results, message: "请求成功" });
    }
  });
});

router.get("/getbookofuser", async (req, res) => {
  //返回到浏览器的数据
  var id = req.query.user_id;
  getbookofuser(id, function (err, results) {
    if (err) {
      res.json({ data: [], message: "error" });
    } else {
      res.json({ data: results, message: "success" });
    }
  });
});

router.get("/deletebook", async (req, res) => {
  //返回到浏览器的数据
  var id = req.query.book_id;
  deletebook(id, function (err, results) {
    if (err) {
      res.json({ data: {}, message: "error" });
    } else {
      res.json({ data: {}, message: "success" });
    }
  });
});

router.get("/addbook", async (req, res) => {
  //返回到浏览器的数据
  var book_name = req.query.book_name;
  var book_price = req.query.book_price;
  var book_freight = req.query.book_freight;
  var book_img = req.query.book_img;
  var book_introduction = req.query.book_introduction;
  var book_num = req.query.book_num;
  var user_id = req.query.user_id;
  addbook(
    book_name,
    book_price,
    book_freight,
    book_img,
    book_introduction,
    book_num,
    user_id,
    function (err, results) {
      if (err) {
        res.json({ data: {}, message: "error" });
      } else {
        res.json({ data: {}, message: "success" });
      }
    }
  );
});

module.exports = router;
