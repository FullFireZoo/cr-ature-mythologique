var assert = require('chai').assert;
var Unicorn = require('../exercises/unicorn');

describe('Unicorn', function() {

  it('should be a function', function() {
    assert.isFunction(Unicorn);
  });

  it('should instantiate our good friend, Unicorn', function() {
    var unicorn = new Unicorn();
    assert.isObject(unicorn);
  });

  it('insert test here', function() {
    var unicorn = new Unicorn('Bree');
    assert.equal(unicorn.name, 'Bree');
  });

  it('insert test here', function() {
    var unicorn = new Unicorn('Pam');
    assert.equal(unicorn.name, 'Pam');
  });

  it('insert test here', function() {
    var unicorn = new Unicorn('TayTay', 'blue');
    assert.equal(unicorn.color, 'blue');
  });

  it('insert test here', function() {
    var unicorn = new Unicorn('Louisa');
    assert.equal(unicorn.color, 'white');
  });

  it('insert test here', function() {
    var unicorn = new Unicorn('Steve', 'red');
    assert.equal(unicorn.isWhite(), false);
  });

  it('insert test here', function() {
    var unicorn = new Unicorn('Brenna');
    assert.equal(unicorn.says('Wonderful!'), '**;* Wonderful! *;**');
    assert.equal(unicorn.says('Batman has a great smile'), '**;* Batman has a great smile *;**');
  });
});
