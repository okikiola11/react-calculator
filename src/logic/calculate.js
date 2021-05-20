import Operate from './operate';

const Calculate = (dataObj, buttonName) => {
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
    Operate(total, next, operation);
  } else if (buttonName === '.' && next) {
    if (!next.includes('.')) {
      next = next.concat('.');
    }
  } else if ((buttonName === '=') && (next && total)) {
    total = Operate(total, next, operation);
    next = null;
    operation = null;
  }

  return [total, next, operation];
};

export default Calculate;
