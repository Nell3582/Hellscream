// var body = $response.body;
// var url = $request.url;
// var obj = JSON.parse(body);

// const path = "SettleHotWaterOrder";
// const path1 = "EmpById";

// function FormatDate () {
//   var now = new Date();
//   var year = now.getFullYear();
//   var month = now.getMonth();
//   var date = now.getDate();
//   month = month + 1;
//   if (month < 10){
//       month = "0" + month;
// }
//   if (date < 10) {
//    date = "0" + date;
//   }
//   var time = year + "-" + month + "-" + date;
//   return time;
// }
// var today_time =  FormatDate();
// if(today_time >= '2021-03-26'){
//   notify()
// } else {
//   Unlock()
// };

// function Unlock() {
//   if (url.indexOf(path1) != -1) {
//     obj["data"]["balance"] = "100.00";
//     body = JSON.stringify(obj);
//     $done({ body });
//   }

//   if (url.indexOf(path) != -1) {
//     let data = $request.body;
//     data["amout"] = "0.18";
//     data["surplus"] = "9.82";
//     ResponseData = JSON.stringify(data);
//     $done({ ResponseData });
//   }

//   if (url.indexOf(path) != -1) {
//     obj["data"]["prestore"] = "10";
//     obj["data"]["withhold"] = "0.09";
//     obj["data"]["water_consumption"] = "2.9";
//     obj["data"]["amount"] = "0.18";
//     obj["data"]["surplus"] = "9.82";
//     body = JSON.stringify(obj);
//     $done({ body });
//   }
// };

// function notify() {
//   if (url.indexOf(path1) != -1) {
//     obj["data"]["depts"] = "您的解锁文件已过有效期请联系>QQ>3058649832>获取新解锁文件";
//     body = JSON.stringify(obj);
//     $done({ body });
//   }
// }

// var body = $response.body;
// var url = $request.url;
// var obj = JSON.parse(body);

// const path = "SettleHotWaterOrder";
// const path1 = "EmpById";

// if (url.indexOf(path) != -1) {
//   obj["data"]["prestore"] = "10";
//   obj["data"]["withhold"] = "0.09";
//   obj["data"]["water_consumption"] = "0.4";
//   obj["data"]["amount"] = "0.09";
//   obj["data"]["surplus"] = "9.91";
//   body = JSON.stringify(obj);
// }
// if (url.indexOf(path1) != -1) {
//   obj["data"]["mobile_phone"] = "17361014786";
//   obj["data"]["balance"] = "100.00";
//   body = JSON.stringify(obj);
// }
// $done({ body });

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
let headers = $request.headers;

const path = "SettleHotWaterOrder";
const path1 = "EmpById";
const key = "13281026463";
const finaltime = "2025-03-26";

var today_time = FormatDate();
var tel = getUserInfo();
if (tel !== key || today_time >= finaltime) {
  notify();
} else {
  Unlock();
};

function getUserInfo() {
  if (url.indexOf(path1) != -1) {
    phone = obj["data"]["mobile_phone"];
    return phone;
  }
};

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

function Unlock() {
  if (url.indexOf(path1) != -1) {
    obj["data"]["balance"] = "100.00";
    body = JSON.stringify(obj);
    $done({ body });
  }
  if (url.indexOf(path2) != -1) {
    obj["data"]["x_hot_water_order_id"] =
      "f1279bda-15ed-48a0-adaa-da11b31f9ede";
    obj["data"]["withhold"] = "0.09";
    obj["data"]["prestore"] = "10";
    body = JSON.stringify(obj);
    $done({ body });
  }
  if (url.indexOf(path) != -1) {
    let data = $request.body;
    data["x_hot_water_order_id"] = "f1279bda-15ed-48a0-adaa-da11b31f9ede";
    data["maintenance_log"] =
      "68501109001220050681660132000166313237396264612d313565642d343861302d616461612d64613131623331663965646566303732653138372d393462392d346330382d613235332d66666637383932666134336408542218032120405422180321200400000009000000910900009616";
    data["amout"] = "0.09";
    data["surplus"] = "9.91";
    data["water_consumption"] = "0.4";
    ResponseData = JSON.stringify(data);
    $done({ ResponseData });
  }

  if (url.indexOf(path) != -1) {
    obj["data"]["x_hot_water_order_id"] =
      "f1279bda-15ed-48a0-adaa-da11b31f9ede";
    obj["data"]["prestore"] = "10";
    obj["data"]["withhold"] = "0.09";
    obj["data"]["water_consumption"] = "0.4";
    obj["data"]["amount"] = "0.09";
    obj["data"]["surplus"] = "9.91";
    body = JSON.stringify(obj);
    $done({ body });
  }
}

function notify() {
  if (headers["Cookie"] !== key) {
    if (url.indexOf(path1) != -1) {
      obj["data"]["depts"] = "用户鉴权失败,请联系>QQ>3058649832>获取解锁文件";
    } else if (today_time >= finaltime) {
      if (url.indexOf(path1) != -1) {
        obj["data"]["depts"] =
          "您的解锁文件已过有效期,请联系>QQ>3058649832>获取新解锁文件";
      }
    }
  }
  body = JSON.stringify(obj);
  $done({ body });
}
