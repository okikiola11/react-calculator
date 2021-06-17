import calculate from '../../logic/calculate';

const buttonsArray = (buttons) => {
  const value = {};
  buttons.forEach((button) => {
    Object.assign(value, calculate(value, button));
  });
  Object.keys(value).forEach((key) => {
    if (value[key] === null) {
      delete value[key];
    }
  });
  return value;
};

describe('The calculate function', () => {
  it('should clear the operator when AC is pressed', () => {
    expect(buttonsArray(['4', '+', '9', 'AC'], '+')).toEqual({});
  });

  it('should add numbers', () => {
    expect(buttonsArray(['4', '+', '9', '='], '=')).toEqual({
      total: '13',
    });
  });

  it('should multiply numbers', () => {
    expect(buttonsArray(['4', 'x', '9', '='], '=')).toEqual({
      total: '36',
    });
  });

  it('should subtract numbers', () => {
    expect(buttonsArray(['4', '-', '9', '='], '=')).toEqual({
      total: '-5',
    });
  });

  it('should divide numbers', () => {
    expect(buttonsArray(['8', '÷', '4', '='], '=')).toEqual({
      total: '2',
    });
  });

  it('should convert 6 % to 0.06', () => {
    expect(buttonsArray(['6', '%'])).toEqual({
      operation: '%',
      total: '0.06',
    });
  });

  it('should not accept + as the first button clicked', () => {
    expect(buttonsArray(['+'], '+')).not.toEqual({
      operation: '+',
    });
  });

  it('should not accept - as the first button clicked', () => {
    expect(buttonsArray(['-'], '-')).not.toEqual({
      operation: '-',
    });
  });

  it('should not accept x as the first button clicked', () => {
    expect(buttonsArray(['x'], 'x')).not.toEqual({
      operation: 'x',
    });
  });

  it('should not accept ÷ as the first button clicked', () => {
    expect(buttonsArray(['÷'], '÷')).not.toEqual({
      operation: '÷',
    });
  });

  it('should not accept ÷ as the first button clicked', () => {
    expect(buttonsArray(['÷'], '÷')).not.toEqual({
      operation: '÷',
    });
  });

  it('should not divide a number by "0"', () => {
    expect(buttonsArray(['3', '÷', '0', '='], '=')).not.toEqual({
      total: '0',
    });
  });

  it('should still show the total if = is clicked multiple times after an operation', () => {
    expect(buttonsArray(['4', '-', '8', '=', '=', '=', '='], '=')).not.toEqual({
      total: '=',
    });
  });

  it('should concatenate numbers', () => {
    expect(buttonsArray(['9', '3'], '+')).toEqual({
      next: '93',
    });
  });

  it('should not concatenate two leading zeros', () => {
    expect(buttonsArray(['0', '0'])).not.toEqual({
      next: '00',
    });
  });

  it('should concatenate numbers into floats', () => {
    expect(buttonsArray(['0', '.', '5'], '+')).toEqual({
      next: '0.5',
    });
  });

  it('should add floats', () => {
    expect(buttonsArray(['0', '.', '6', '+', '0', '.', '2', '='], '+')).toEqual({
      total: '0.8',
    });
  });

  it('should not add numbers if no operation is given after a number', () => {
    expect(buttonsArray(['9', '+', '2'], '+')).not.toEqual({
      total: '11',
      next: '5',
      operation: '+',
    });
  });

  it('should show only that one number as next if no other character is given ', () => {
    expect(buttonsArray(['8'])).toEqual({
      next: '8',
    });
  });

  it('should still show the last total if an operation is given after =', () => {
    expect(buttonsArray(['5', '-', '3', '=', '+'], '+')).toEqual({
      total: '2',
      operation: '+',
    });
  });

  it('should have next number as 9 if operation is not given after', () => {
    expect(buttonsArray(['4', '+', '6', '=', '+', '9'], '+')).toEqual({
      total: '10',
      next: '9',
      operation: '+',
    });
  });

  it('should have a total of 18', () => {
    expect(buttonsArray(['4', '+', '7', '=', '+', '9', '='], '=')).toEqual({
      total: '20',
    });
  });
});
