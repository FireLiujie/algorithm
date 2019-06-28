/**
 * 检查某个整数是否为回文数
 *  比如：121,1221,12321
 **/

// 方法一
var num = 123454321

function palindrome(x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false
  }
  var div = 1
  while (x / div > 10) {
    div *= 10
  }
  while (x > 0) {
    var left = ~~(x / div)
    var right = ~~(x % 10)
    if (left != right) {
      return false
    }
    x = ~~((x % div) / 10)
    div = ~~(div / 100)
  }
  return true
}

console.log(palindrome(num))
