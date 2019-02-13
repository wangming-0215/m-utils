"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArray;

var _types = require("./helper/types");

/**
 * 判断入参是否为数组
 *
 * @param {*} input
 */
function isArray(input) {
  return Array.isArray ? Array.isArray(input) : Object.prototype.toString.call(input) === _types.TYPES.ARRAY;
}