import operate from './operate';

const calculate = (dataObj, buttonName) => {
  let { total, next, operation } = dataObj;
  const operators = ['+', '÷', 'x', '-', '%'];

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (operators.includes(buttonName)) {
    operate(total, next, operation);
  } else if (buttonName === '.' && next) {
    if (!next.includes('.')) {
      next = next.trim('').concat('.');
    }
  } else if ((buttonName === '=') && (next && total)) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  }

  return [total, next, operation];
};

export default calculate;
