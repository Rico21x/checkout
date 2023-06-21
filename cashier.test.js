const { scanApples } = require('./cashier.js');

describe('scanApples', () => {
  beforeEach(() => {
    totalCost = 0; // Reset the totalCost before each test
  });

  it('calculates the total cost correctly for one apple', () => {
    scanApples(1);
    expect(totalCost).toBe(0.50);
  });

  it('calculates the total cost correctly for multiple apples', () => {
    scanApples(2);
    scanApples(3);
    expect(totalCost).toBe(2.50);
  });
});
