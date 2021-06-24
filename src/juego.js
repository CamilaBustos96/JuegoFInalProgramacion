//import {MENU} from "./src/scenes/menu";
//import {TUTORIAL} from "./src/scenes/tutorial";
//let game;

var gameConfig = {
    type: Phaser.AUTO,
    scale: 
    {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "thegame",
        width: 1366,
        height: 768
      
    },
    scene: [pantallamenu, creditos, tutorial, nivel1, nivel2, gameover],

    // physics settings
    physics: 
    {
        default: "arcade",
        arcade: {
            gravity: {
                y: 450
            },
            debug: true
        }
    }
}
var game = new Phaser.Game(gameConfig);
window.focus();
var cursors;
var player;
var platform;
var desinfectante;
var puntos = 0;
var textopuntos;
