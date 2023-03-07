const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('when type is SUM', () => {
    it('checking floating whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 3.0, 4.0), 7);
    });

    it('checking rounding up numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.5, 3.709), 7);
    });

    it('checking rounding up numbers less than *.5', () => {
      assert.strictEqual(calculateNumber('SUM', 2.4, 5.24), 7);
    });

    it('checking whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 3, 4), 7);
    });

    it('checking negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.3, -4.2), -5);
    });

    it('checking both negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -40, 50), 10);
    });
  });

  describe('when type is SUBTRACT', () => {
    it('checking floating whole numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.0, 4.0), 1);
    });

    it('checking rounding up numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 10.5, 3.709), 7);
    });

    it('checking rounding up numbers less than *.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 12.4, 5.24), 7);
    });

    it('checking whole numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 4), -1);
    });

    it('checking negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -6.3, -4.2), -2);
    });

    it('checking both negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -40, 50), -90);
    });
  });

  describe('when type is DIVIDE', () => {
    it('checking floating whole numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 28.0, 4.0), 7);
    });

    it('checking rounding up numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.5, 3.709), 2);
    });

    it('checking rounding up numbers less than *.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 20.4, 5.24), 4);
    });

    it('checking whole numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 32, 4), 8);
    });

    it('checking negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.3, -4.2), 0.25);
    });

    it('checking both negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -500, 50), -10);
    });

    it('checking a === 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 0), 'Error');
    });

    it('checking a === 0 and b === 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 4), 0);
    });
  });
});
