export function toMoney (num, fixed) {
  if (typeof num !== 'number') {
    num = parseFloat(num)
  }
  var reg = /\B(?=(\d{3})+$)/g
  num = num.toString().split('.')
  fixed = fixed == undefined ? 2 : fixed

  num[0] = num[0].replace(reg, ',')
  num[1] = num[1] ? num[1].substr(0, fixed) : '00000000000000000'.substr(0, fixed)

  return fixed ? num.join('.') : num[0]
}
