var assert = require('assert');
const { it } = require('mocha');
const { recursiveTest } = require('../app/helpers/helpers');


describe('App', function () {
  it('app should return 3', ()=>{
      assert.equal(recursiveTest([7,88989813,41124,511,1]), 3)
  })
});