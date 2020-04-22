## 写一个正则表达式 匹配所有 Number 直接量
`/^[-\+]?(\.\d+|(0|[1-9]\d*)\.?\d*?)([eE][-\+]?d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/`
## 写一个 UTF-8 Encoding 的函数
```
/**
 * @param {string} str
 * @return {string}
 */
function utf8Encoding(str) {
  return str
    .split('')
    .map(char => `\\u${char.charCodeAt().toString(16)}`)
    .join('')
}
```
## 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
`/[\x21-\x7E]{6,16}|[\u0021-\u007E]{6,16}|(['"])(?:(?!\1).)*?\1/g`