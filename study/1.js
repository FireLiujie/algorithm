/**
 * 检查某个整数是否为回文数
 *  比如：121,1221,12321
 */

// 方法一
// var num = 123454321

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

// console.log(palindrome(num))

/**
 *  数字反转,范围是-2的31次方~2的31次方-1
 * 25465 => 56452
 * -76804 => -40867
 */

var num = 2147483647

function reverse(x) {
  var min_value = Math.pow(-2, 31)
  var max_value = Math.pow(2, 31) - 1
  console.log(max_value)
  var ans = 0
  while (x != 0) {
    var pop = x % 10
    ans = ans * 10 + pop
    x = ~~(x / 10)
  }
  if (ans >= min_value && ans <= max_value) {
    return ans
  } else {
    return 0
  }
}

console.log(reverse(num))
