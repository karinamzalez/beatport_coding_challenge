/**
 * Take an object and remove null, empty, or undefined values.
 * 
 * @param {Object} object
 * @returns {Object}
 */
const cleanObject = (object) => {
  // complete the function
};

describe('cleanObject', () => {
  it('removes null, undefined, and empty string values', () => {
    const dirty = {
      a: '',
      b: undefined,
      c: null,
      d: 'value',
      e: false,
    };

    const clean = cleanObject(dirty);

    expect(clean).to.deep.equal({
      d: 'value',
      e: false,
    });
  });
});
