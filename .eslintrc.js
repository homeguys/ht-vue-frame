/*
 * @Author: 王磊
 * @Date: 2020-11-11 11:11:04
 * @LastEditors: 王磊
 * @LastEditTime: 2020-12-14 09:17:26
 * @Description: eslint代码校验
 * @FilePath: \.eslintrc.js
 */
const env = process.env.NODE_ENV;

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-debugger': env === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'object-curly-newline': 0,
  },
};
