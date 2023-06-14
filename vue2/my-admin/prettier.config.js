/*
 * @Description: prettier 配置
 * @Date: 2021-06-02 02:19:27 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-07-01 16:21:47 +0800
 * @LastEditors: JackChou
 */
module.exports = {
  singleQuote: true,
  semi: false,
  arrowParens: 'avoid',
  printWidth: 120, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 缩进不使用tab，使用空格
  proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  htmlWhitespaceSensitivity: 'ignore',
  jsxBracketSameLine: true, // 在jsx中把'>' 是否单独放同一行
  jsxSingleQuote: true, // 在jsx中使用单引号代替双引号
  // parser: 'vue-eslint-parser', //  格式化的解析器，默认是babylon
  // trailingComma: 'es5', 'none' "all" // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  trailingComma: 'es5', // 可能和 eslint 的 comma-dangle 冲突
  // eslintIntegration: false, // 不让prettier使用eslint的代码格式进行校验
  // requireConfig: false, // Require a 'prettierconfig' to format prettier
  // ignorePath: '.prettierignore', // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  // stylelintIntegration: false, // 不让prettier使用stylelint的代码格式进行校验
  // tslintIntegration: false, // 不让prettier使用tslint的代码格式进行校验
  endOfLine: 'lf',
  vueIndentScriptAndStyle: false,
  quoteProps: 'as-needed',
  rangeStart: 0,
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2,
      },
    },
  ],
}
