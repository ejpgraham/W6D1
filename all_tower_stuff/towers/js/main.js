const HanoiGame = require('./game.js');
const HanoiView = require('./hanoi-view.js');

$( () => {
  const rootEl = $('.hanoi');
  const $el = $("body");
  const game = new HanoiGame();
  new HanoiView(game, $el);
});
