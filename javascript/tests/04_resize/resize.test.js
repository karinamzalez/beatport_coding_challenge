/**
 * The code for this test is located in resize.js
 * 
 * Implement a function that handles JavaScript events. When the user clicks
 * and drags the `resize` node, its parent node `panel` should grow or shrink
 * vertically.
 * 
 * There is a gif in this folder that shows the desired functionality.
 *
 * You can use the sandbox HTML to develop at:
 * http://localhost:3357/tests/04_resize/sandbox.html
 */
import resize from './resize.js';

describe('resize', () => {
  before(() => {
    updateSandbox(`
      
      <div class="panel" id="panel">
        <div class="resize" id="resize"></div>
      </div>
    `);
    resize();
  });

  after(() => {
    clearSandbox();
  });

  it('resizes the panel when resize is clicked and dragged', () => {
    const resize = document.getElementById('resize');
    const panel = document.getElementById('panel');
    const initHeight = panel.getBoundingClientRect().height;

    resize.dispatchEvent(new MouseEvent('mousedown', { clientY: 50, }));
    document.dispatchEvent(new MouseEvent('mousemove', { clientY: window.innerHeight - 150, }));
    document.dispatchEvent(new MouseEvent('mouseup'));

    expect(panel.getBoundingClientRect().height).to.equal(150);

    resize.dispatchEvent(new MouseEvent('mousedown', { clientY: 150, }));
    document.dispatchEvent(new MouseEvent('mousemove', { clientY: window.innerHeight - 50, }));
    document.dispatchEvent(new MouseEvent('mouseup'));

    expect(panel.getBoundingClientRect().height).to.equal(50);
  });
});