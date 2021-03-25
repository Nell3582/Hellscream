var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const path = "SettleHotWaterOrder";
const path1 = "EmpById";
const path2 = "CreateHotWaterOrder";

function FormatDate() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var date = now.getDate();
  month = month + 1;
  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }
  var time = year + "-" + month + "-" + date;
  return time;
}
var today_time = FormatDate();
if (today_time >= "2021-03-26") {
  notify();
} else {
  Unlock();
}

function Unlock() {
  if (url.indexOf(path1) != -1) {
    obj["data"]["balance"] = "100.00";
    body = JSON.stringify(obj);
    $done({ body });
  }
  if (url.indexOf(path2) != -1) {
    obj["data"]["x_hot_water_order_id"] =
      "b1b8cb46-5aba-4316-b153-013c23f6550b";
    obj["data"]["withhold"] = "0.09";
    obj["data"]["prestore"] = "5";
    body = JSON.stringify(obj);
    $done({ body });
  }
  if (url.indexOf(path) != -1) {
    let data = $request.body;
    data["x_hot_water_order_id"] = "b1b8cb46-5aba-4316-b153-013c23f6550b";
    data["maintenance_log"] =
      "68508703001220050681660132000162316238636234362d356162612d343331362d623135332d30313363323366363535306264326333363563302d383033352d313165622d396433622d35303662346266656664396353342021032120113620210321202900000018000000820400002c16";
    data["amout"] = "0.18";
    data["surplus"] = "4.82";
    data["water_consumption"] = "2.90";
    ResponseData = JSON.stringify(data);
    $done({ ResponseData });
  }

  if (url.indexOf(path) != -1) {
    obj["data"]["x_hot_water_order_id"] =
      "b1b8cb46-5aba-4316-b153-013c23f6550b";
    obj["data"]["prestore"] = "5";
    obj["data"]["withhold"] = "0.09";
    obj["data"]["water_consumption"] = "2.9";
    obj["data"]["amount"] = "0.18";
    obj["data"]["surplus"] = "4.82";
    body = JSON.stringify(obj);
    $done({ body });
  }
}

function notify() {
  if (url.indexOf(path1) != -1) {
    obj["data"]["depts"] =
      "您的解锁文件已过有效期请联系>QQ>3058649832>获取新解锁文件";
    body = JSON.stringify(obj);
    $done({ body });
  }
}
