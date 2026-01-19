/*
 * @Author: Lybeen
 * @Email: helibin@139.com
 * @Date: 2026-01-19 17:55:38
 * @LastEditTime: 2026-01-19 17:55:52
 * @LastEditors: Lybeen
 * @FilePath: /bin-tauri/commitlint.config.cjs
 */
// commitlint.config.cjs
const czConfig = require("./.cz-config.json")

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // type 类型定义
    "type-enum": [2, "always", czConfig.types.map((item) => item.value)],
    // subject 大小写不做校验
    // 自动部署的BUILD ROBOT的commit信息大写，以作区别
    "subject-case": [0],
  },
}