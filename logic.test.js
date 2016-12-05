const logic = require('./logic');

test('help responds with help speech', () => {

  // GIVEN

  // WHEN
  const result = logic.help();

  // THEN
  expect(result).toEqual({speech: "I am here to help you."});

});
