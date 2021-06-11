let game;

let gameConfig = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1366,
        height: 768,
      },
    scene: [menu, creditos, tutorial, nivel1, nivel2, gameover],

    // physics settings
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    }
}
game = new Phaser.Game(gameConfig);
window.focus();