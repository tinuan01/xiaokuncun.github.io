"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "http://111.67.201.139:8002";
function request(config = {}) {
  let {
    url,
    data = {},
    method = "GET"
  } = config;
  url = BASE_URL + url;
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      data,
      method,
      success: (res) => {
        if (res.data.code === 200) {
          resolve(res);
        } else {
          common_vendor.index.showModal({
            title: "错误提示",
            content: res.data.msg,
            showCancel: false
          });
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.BASE_URL = BASE_URL;
exports.request = request;
