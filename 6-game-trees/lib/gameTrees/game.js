"use strict";

var Board = require("./board");
var PositionEvaluator = require("./positionEvaluator");

var Game = function (player1, player2) {
  var self = this;

  self.currentPlayer = player1;

  self.board = new Board([
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
  ]);

  self.nextTurn = function (callback) {
    self.currentPlayer.playTurn(self.board, function (board) {
      self.board = board;

      if (self.currentPlayer === player1) {
        self.currentPlayer = player2;
      } else {
        self.currentPlayer = player1;
      }

      callback();
    });
  };

  self.finished = function () {
    return PositionEvaluator.finished(self.board);
  };
};

module.exports = Game;
