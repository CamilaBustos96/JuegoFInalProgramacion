class menu extends Phaser.Scene
{
    constructor() {
        super("MenuJuego")
    }
}

preload()
{
    this.load.image('FondoMenu', 'assets/FondoMenu.png');
    this.load.image('BotonJugar', 'assets/BotonJugar.png');
    this.load.image('BotonInfo', 'assets/BotonInfo.png');
}

create()
{
    this.add.image(game.config.width , game.config.height , 'FondoMenu');
    var botonjugar = this.add.image(400, 300, 'BotonJugar')
    botonjugar.setInteractive()
    botonjugar.on('pointerdown', () => this.scene.start('PrimerNivel'));
    var botoninfo = this.add.image(400, 300, 'BotonInfo')
    botoninfo.setInteractive()
    botoninfo.on('pointerdown', () => this.scene.start('Creditos') );
}