/*
 * @Author: Cecil
 * @Last Modified by: Cecil
 * @Last Modified time: 2018-06-02 10:37:22
 * @Description 依赖的正则表达式集合
 */

'use strict'

const IPV4_REGEX = /(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))/

module.exports = {
  IPV4_REGEX
}
