const express = require("express");
const router = express.Router();
var getUserInfo = require("../dao/userdb/getUserInfo");
var login = require("../dao/userdb/login");
var userisexist = require("../dao/userdb/userisexist");
var register = require("../dao/userdb/register");
var updatepassword = require("../dao/userdb/updatepassword");

//router.get是处理GET请求的方法，router.post是处理POST请求的方法
router.get("/getUserInfo", async (req, res) => {
  //返回到浏览器的数据
  var id = req.query.user_id;
  getUserInfo(id, function (err, results) {
    if (err) {
      res.json({ data: {}, message: "请求失败" });
    } else {
      res.json({ data: results, message: "请求成功" });
    }
  });
});

router.get("/login", async (req, res) => {
  //返回到浏览器的数据
  var username = req.query.username;
  var password = req.query.password;
  login(username, password, function (err, results) {
    if (err) {
      res.json({ data: {}, message: "请求失败" });
    } else {
      if (results[0] != undefined)
        res.json({ data: results[0], message: "登录成功" });
      else res.json({ data: {}, message: "登录失败" });
    }
  });
});

router.get("/updatepassword", async (req, res) => {
  //返回到浏览器的数据
  var id = req.query.user_id;
  var password = req.query.password;
  updatepassword(id, password, function (err, results) {
    if (err) {
      res.json({ data: {}, message: "error" });
    } else {
      res.json({ data: {}, message: "success" });
    }
  });
});

router.get("/register", async (req, res) => {
  //返回到浏览器的数据
  var username = req.query.username;
  var password = req.query.password;
  userisexist(username, function (err, results) {
    if (err) {
      res.json({ data: {}, message: "请求失败" });
    } else {
      if (results[0].num == 0) {
        //该用户名可用
        register(username, password, function (err, results) {
          if (err) {
            //返回错误信息
            res.json({ data: { info: "注册失败" }, message: "error" });
          } else {
            res.json({ data: { info: "注册成功" }, message: "success" });
          }
        });
      } else {
        res.json({ data: { info: "用户名重复" }, message: "error" });
      }
    }
  });
});

module.exports = router;
