
class pantallamenu extends Phaser.Scene 
{
    constructor() {
        super("Menu")
    }
 
    preload(){
        this.load.audio('boton', './Assets/Musica/botones.mp3');
        this.load.audio('musical', './Assets/Musica/musiquuita.wav');
        this.load.image('FondoM', './Assets/FondoMenu.png');
        this.load.image('BotonJ', './Assets/BotonJugar.png');
        this.load.image('BotonI', './Assets/BotonInfo.png');
        this.load.image('BotonN2', './Assets/BotonReinicio.png');

    }
    create(){

        this.musicaloca = this.sound.add('musical',{
            loop: true,
            mute: false,
            volume: 0.2,
        });
        this.musicaloca.play();

        this.add.image(0, 0, 'FondoM').setOrigin(0).setScale(0.5);
        var botonjugar = this.add.image(700, 400, 'BotonJ').setScale(.4)
        botonjugar.setInteractive()
        botonjugar.on('pointerdown', () => {
            this.musicaloca.mute = true;
        } );
        botonjugar.on('pointerdown', () => this.scene.start('TutorialJuego') );
        
        
        var botoninfo = this.add.image(700, 550, 'BotonI').setScale(.4)
        //botoninfo.setScale(.4)
        botoninfo.setInteractive()
        botoninfo.on('pointerdown', () => {
            this.musicaloca.mute = true;
        });
        botoninfo.on('pointerdown', () => this.scene.start('Creditos') );
    
    }
 
}



