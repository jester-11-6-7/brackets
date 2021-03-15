module.exports = function check(str, bracketsConfig) {
  let chars = str.split(''),
  stack = [],
  closeIndex,
  openIndex;
const open = bracketsConfig.flat(2).filter((value, index) => index % 2 === 0),
  close = bracketsConfig.flat(2).filter((value, index) => index % 2 !== 0);

for (let i = 0; i < chars.length; i++) {
  openIndex = open.indexOf(chars[i]);
  console.log(openIndex)
  if (openIndex !== -1) {
      stack.push(openIndex);
      continue;
  }

  closeIndex = close.indexOf(chars[i]);
  console.log(closeIndex)
  if (closeIndex !== -1) {
      openIndex = stack.pop();
      if (closeIndex !== openIndex) {
          return false;
      }
  }
}

if (stack.length !== 0) {
  return false;
}

return true
}
