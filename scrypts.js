let a = ''

let numbers = []
let res
function numOperations(num) {
  numbers.push(num)
  if (numbers.length) {
    a = ''
    document.getElementById('display').innerHTML = a
  }
  for (let i = 0; i < numbers.length; i++) {
    a = a + numbers[i]

  }
  document.getElementById('display').innerHTML = a
}

function result() {
  document.getElementById('display').innerHTML = ''
  res = eval(a)

  document.getElementById('display').innerHTML = res
  while (numbers.length > 0) {
    numbers.pop()
  }

}
function clr() {
  document.getElementById('display').innerHTML = '0'
  while (numbers.length > 0) {
    numbers.pop()
  }
  a = ''

}
