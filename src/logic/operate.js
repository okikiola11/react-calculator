import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  let result;

  if (operation === '+') {
    result = num1.plus(num2).toString();
  }
  if (operation === '-') {
    result = num1.minus(num2).toString();
  }
  if (operation === 'x') {
    result = num1.times(num2).toString();
  }
  if (operation === '÷') {
    if (num2.toString() === '0') {
      result = 'NaN';
    } else {
      result = num1.div(num2).toString();
    }
  }
  if (operation === '%') {
    result = ((num1 * num2) / 100).toString();
  }
  return result;
};

export default operate;
