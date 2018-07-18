/**
 * Provide some math functions
 */
let math = {
  add(num, num2) {
    return num + num2;
  },
  subtract(num, num2) {
    return num - num2;
  },
  multiply(num, num2) {
    return num * num2;
  }, 
  divide(num, num2) {
    return num / num2;
  },
  raise(num, num2) {
    return num ** num2;
  }
};

describe('math', () => {
  it('adds', () => expect(math.add(1, 2)).to.equal(3));

  it('subtracts', () => expect(math.subtract(1, 2)).to.equal(-1));

  it('multiplies', () => expect(math.multiply(3, 2)).to.equal(6));

  it('divides', () => expect(math.divide(1, 2)).to.equal(.5));

  it('raises', () => expect(math.raise(3, 7)).to.equal(2187));
});
