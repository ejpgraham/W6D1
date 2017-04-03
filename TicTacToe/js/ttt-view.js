class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.$ul = this.setupBoard();
    this.$el.append(this.$ul);

    this.bindEvents();
  }


  bindEvents() {
    this.$ul.on("click", (e) => {
      let $li = $(e.target);
      // debugger
      this.game.playMove($li.data("pos"));
      this.makeMove($li);
    });
  }

  makeMove($square) {
    $square.text(this.game.currentPlayer);
    $square.css("background-color", "white");
    // debugger
    if (this.game.currentPlayer === "x"){
      $square.css("color", "red");
    } else {
      $square.css("color", "blue");
    }

    if (this.game.winner()) {
      alert("Congrats you won!!");
    } else if (this.game.isOver()) {
      alert("Sorry, no one won.");
    }
  }

  setupBoard() {
    let $ul = $('<ul></ul>');

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $('<li></li>');
          $li.data('pos', [i, j]);
        $ul.append($li);
      }
    }

    return $ul;
  }
}

module.exports = View;
