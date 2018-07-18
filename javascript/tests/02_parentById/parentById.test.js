/**
 * Given an element, and the id of some parent element, returns that parent. 
 * If no parent is found, return `undefined`.
 * 
 * @param {HTMLElement} el 
 * @param {String} id
 * @returns {HTMLElement|undefined}
 */
const parentById = (el, id) => {
  // complete the function
  return null;
};

describe('parentById', () => {

  before(() => {
    updateSandbox(`
      <div id="a">
        <div id="b">
          <div id="c">
            <div id="d">
              <div id="e">
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });

  after(() => {
    clearSandbox();
  });

  it('returns an HTMLElement', () => {
    const el = document.getElementById('e');

    expect(parentById(el, 'a') instanceof HTMLElement).to.equal(true);
  });

  it('retrieves parent node', () => {
    const el = document.getElementById('e');

    expect(parentById(el, 'a').id).to.equal('a');
    expect(parentById(el, 'b').id).to.equal('b');
    expect(parentById(el, 'c').id).to.equal('c');
    expect(parentById(el, 'd').id).to.equal('d');    
  });

  it('returns undefined if parent does not exist', () => {
    const el = document.getElementById('e');

    expect(parentById(el, 'e')).to.equal(undefined);
  });
});
