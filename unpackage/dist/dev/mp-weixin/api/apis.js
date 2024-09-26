"use strict";
const utils_request = require("../utils/request.js");
function apiGetHotRedBase() {
  return utils_request.request({
    url: "/front/systemHome/getHotRedBase",
    method: "get"
  });
}
function apigetWeatherNow(location) {
  return utils_request.request({
    url: "/front/systemHome/getWeatherNow/" + location,
    method: "get"
    // data:{}
  });
}
exports.apiGetHotRedBase = apiGetHotRedBase;
exports.apigetWeatherNow = apigetWeatherNow;
