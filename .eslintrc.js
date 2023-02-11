/*
 * @Author: LinRenJie
 * @Date: 2023-02-11 21:27:11
 * @LastEditTime: 2023-02-11 21:27:21
 * @Description: 
 * @FilePath: /Taro-Nutui4-app/.eslintrc.js
 * @Email: xoxosos666@gmail.com
 */

module.exports = {
  globals: {
    wx: 'readonly',
  },
  env: {
    node: true,
    es2021: true,
  },
  extends: 'plugin:vue/vue3-essential',
  overrides: [],
  parserOptions: {
    parser: '@typescript-eslint/parser', // vue3+ts 需要放在options里面
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // noInlineConfig: 0,
    'no-debugger': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'never',
      },
    ],
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': ['error'], //禁止使用any
    eqeqeq: 2, //必须使用全等
    'max-lines': ['error', 500], //限制行数 请勿修改 请优化你的代码
    complexity: ['error', 5], // 限制复杂度
    'require-await': 'error',
  },
}
