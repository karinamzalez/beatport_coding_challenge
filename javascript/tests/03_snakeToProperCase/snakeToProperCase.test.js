/**
 * Takes a snake case string and converts it to title case. 
 * 
 * @param {String} str
 * @returns {String} 
 */
const snakeToProperCase = (str) => str;

describe('snakeToProperCase', () => {
  it('converts move_in_date to Move In Date', () => {
    expect(snakeToProperCase('move_in_date')).to.equal('Move In Date');
  });
  
  it('converts __strange___input______ to Strange Input', () => {
    expect(snakeToProperCase('__strange___input______')).to.equal('Strange Input');
  });
});