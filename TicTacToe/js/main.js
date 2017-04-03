const View = require("./ttt-view.js");
const Game = require("../../ticsolution/game.js");

$( () => {
  let $el = $('body');
  $game = new Game();

  $view = new View($game, $el);
});
