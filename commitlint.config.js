/*
 * @Author: LinRenJie
 * @Date: 2023-02-11 21:25:25
 * @LastEditTime: 2023-02-11 21:26:17
 * @Description: 
 * @FilePath: /Taro-Nutui4-app/commitlint.config.js
 * @Email: xoxosos666@gmail.com
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', //  修复
        'docs', // 文档变更
        'style', // 代码格式（不影响代码运行的变动）
        'refactor', // 重构（既不是增加feature）,也不是修复bug
        'pref', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build', // 打包
      ],
    ],
    // subject 大小写不做校验
    'subject-case': [0],
  },
}
