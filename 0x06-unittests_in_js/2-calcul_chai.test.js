const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('when type is SUM', () => {
    it('checking floating whole numbers', () => {
      expect(calculateNumber('SUM', 3.0, 4.0)).to.equal(7);
    });

    it('checking rounding up numbers', () => {
      expect(calculateNumber('SUM', 2.5, 3.709)).to.equal(7);
    });

    it('checking rounding up numbers less than *.5', () => {
      expect(calculateNumber('SUM', 2.4, 5.24)).to.equal(7);
    });

    it('checking whole numbers', () => {
      expect(calculateNumber('SUM', 3, 4)).to.equal(7);
    });

    it('checking negative numbers', () => {
      expect(calculateNumber('SUM', -1.3, -4.2)).to.equal(-5);
    });

    it('checking both negative and positive numbers', () => {
      expect(calculateNumber('SUM', -40, 50)).to.equal(10);
    });
  });

  describe('when type is SUBTRACT', () => {
    it('checking floating whole numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.0, 4.0)).to.equal(1);
    });

    it('checking rounding up numbers', () => {
      expect(calculateNumber('SUBTRACT', 10.5, 3.709)).to.equal(7);
    });

    it('checking rounding up numbers less than *.5', () => {
      expect(calculateNumber('SUBTRACT', 12.4, 5.24)).to.equal(7);
    });

    it('checking whole numbers', () => {
      expect(calculateNumber('SUBTRACT', 3, 4)).to.equal(-1);
    });

    it('checking negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -6.3, -4.2)).to.equal(-2);
    });

    it('checking both negative and positive numbers', () => {
      expect(calculateNumber('SUBTRACT', -40, 50)).to.equal(-90);
    });
  });

  describe('when type is DIVIDE', () => {
    it('checking floating whole numbers', () => {
      expect(calculateNumber('DIVIDE', 28.0, 4.0)).to.equal(7);
    });

    it('checking rounding up numbers', () => {
      expect(calculateNumber('DIVIDE', 7.5, 3.709)).to.equal(2);
    });

    it('checking rounding up numbers less than *.5', () => {
      expect(calculateNumber('DIVIDE', 20.4, 5.24)).to.equal(4);
    });

    it('checking whole numbers', () => {
      expect(calculateNumber('DIVIDE', 32, 4)).to.equal(8);
    });

    it('checking negative numbers', () => {
      expect(calculateNumber('DIVIDE', -1.3, -4.2)).to.equal(0.25);
    });

    it('checking both negative and positive numbers', () => {
      expect(calculateNumber('DIVIDE', -500, 50)).to.equal(-10);
    });

    it('checking a === 0', () => {
      expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
    });

    it('checking a === 0 and b === 0', () => {
      expect(calculateNumber('DIVIDE', 0, 4)).to.equal(0);
    });
  });
});
