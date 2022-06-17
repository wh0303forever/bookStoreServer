const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Expose-Headers, Platform, Token, Uid"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, OPTIONS, HEAD"
  );
  res.header("Content-Type", "application/json; charset=utf-8");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//这是为了api模块化管理，前面的是API请求时的路径，后面时处理API请求的文件位置
app.use(
  "/bookstore/bookmanagement",
  require(__dirname + "/module/bookmanagement")
);

app.use(
  "/bookstore/usermanagement",
  require(__dirname + "/module/usermanagement")
);

app.use(
  "/bookstore/ordermanagement",
  require(__dirname + "/module/ordermanagement")
);

//监听的端口号可更改
app.listen(9000, () => {
  console.log("express listen port 9000");
});
