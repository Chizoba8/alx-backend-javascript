const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('checking floating whole numbers', () => {
    assert.strictEqual(calculateNumber(3.0, 4.0), 7);
  });

  it('checking rounding up numbers', () => {
    assert.strictEqual(calculateNumber(2.5, 3.709), 7);
  });

  it('checking rounding up numbers less than *.5', () => {
    assert.strictEqual(calculateNumber(2.4, 5.24), 7);
  });

  it('checking whole numbers', () => {
    assert.strictEqual(calculateNumber(3, 4), 7);
  });

  it('checking negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.3, -4.2), -5);
  });

  it('checking both negative and positive numbers', () => {
    assert.strictEqual(calculateNumber(-40, 50), 10);
  });
});
