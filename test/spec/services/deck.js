'use strict';

describe('Service: Deck', function () {

  // load the service's module
  beforeEach(module('videoPokerApp'));

  // instantiate service
  var Deck;
  beforeEach(inject(function (_Deck_) {
    Deck = _Deck_;
  }));

  it('should do something', function () {
    expect(!!Deck).toBe(true);
  });

});
