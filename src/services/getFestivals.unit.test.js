const getFestivals = require('./getFestivals');

test('getFestivals retrieves festivals', () => {
  console.log(getFestivals);
  expect(getFestivals).toBe(3);
});