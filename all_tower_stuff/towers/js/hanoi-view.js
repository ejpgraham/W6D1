class View {
  constructor(HanoiGame, $el) {
    this.game = HanoiGame;
    this.$el = $el;

  this.setupTowers();
  }

  setupTowers() {

    for (let i = 0; i < 3; i++) {
      const $ul = $('<ul></ul>');
      $ul.attr("id", `tower${i}`);

      for (let j = 0; j < 3; j++) {
        const $li = $('<li></li>');
        if (i === 0){
        $li.attr("id", "render");
      }
        $li.attr("class", `size${j}`);
        $ul.append($li);
      }
      this.$el.append($ul);
    }
  }

}

module.exports = View;
