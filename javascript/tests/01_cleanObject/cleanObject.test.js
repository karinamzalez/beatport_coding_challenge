/**
 * Take an object and remove null, empty, or undefined values.
 * 
 * @param {Object} object
 * @returns {Object}
 */
const cleanObject = (object) => {
  // do this without mutating original
  Object.keys(object).forEach(key => !object[key] && object[key] !== false && delete object[key]);
  return object;
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
