'use strict';

angular.module('videoPokerApp')
  .controller('MainCtrl', function ($scope, Deck) {
    $scope.deck = Deck;
    $scope.hand = [];

    var shuffleDeal = function (array) {
      var m = array.length, t, i;
      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    };

    shuffleDeal($scope.deck);

    for(var i = 0; i < 5; i++) {
      $scope.hand[i] = $scope.deck.shift();
    }
    
  });
