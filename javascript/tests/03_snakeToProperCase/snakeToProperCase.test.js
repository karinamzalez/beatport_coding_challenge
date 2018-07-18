/**
 * Takes a snake case string and converts it to title case. 
 * 
 * @param {String} str
 * @returns {String} 
 */
const capitalizeWords = (str) => {
  return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
};

const snakeToProperCase = (str) => {
  return capitalizeWords(str.replace(/_/g, " ")).replace(/\s\s+/g, ' ').trim();
};

describe('snakeToProperCase', () => {
  it('converts move_in_date to Move In Date', () => {
    expect(snakeToProperCase('move_in_date')).to.equal('Move In Date');
  });
  
  it('converts __strange___input______ to Strange Input', () => {
    expect(snakeToProperCase('__strange___input______')).to.equal('Strange Input');
  });
});