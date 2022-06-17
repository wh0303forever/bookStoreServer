const gettime = function () {
  var nowdate = new Date();
  var year = nowdate.getFullYear();
  var month = nowdate.getMonth() + 1;
  var day = nowdate.getDay();

  var datestring = year + "-" + month + "-" + day;
  return datestring;
};

module.exports = gettime;
