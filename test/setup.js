import { expect } from 'chai';

expect(7).to.equal(3);

function test() {
  console.log('This should log something');
}

describe('This is a test', () => {
  it('Should output this test', () => {
    expect(test).to.be.a('function');
  });
});

