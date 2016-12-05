'use strict';

const handler = require('./index').handler;


describe('all the things', () => {
  test('This tests', () => {
    expect(3).toBe(3);
  });

  test('so does this', () => {
    expect(3).toBe(3);
  });
});

describe('well not all', () =>{
  test('This tests', () => {
    expect(3).toBe(3);
  });

  test('so does this', () => {
    expect(3).toBe(3);
  });
});
