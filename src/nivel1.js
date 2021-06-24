class nivel1 extends Phaser.Scene {
    constructor(){
        super('N1')
    }

    preload(){
        this.load.image('FondoNivelUno', './Assets/FondoCompletoN1.png');
        this.load.image('SueloNivelUno', './Assets/SueloCompletoN1.png');
        this.load.spritesheet('Jugador', './Assets/dude.png', { frameWidth: 32, frameHeight: 48});
        //this.load.tilemapTiledJSON('Mapa', './Assets/Mapa/NIVEL1MAPA.json');
        this.load.image('p1', './Assets/Mapa/plataformachica.png');
        this.load.image('p2', './Assets/Mapa/plataformagrande.png');
        this.load.image('casita', './Assets/casita.png');
        this.load.image('teclas', './Assets/controles.png');
        this.load.image('gel', './Assets/alcohol.png');
        this.load.image('contagiadores', './Assets/enemigos1.png');
        this.load.image('uigel', './Assets/uigel.png');   
    }

    create(){
        //CAMARA
        this.cameras.main.setBounds(0, 0, 10500, 768)
        this.physics.world.bounds.width = 10500
        this.physics.world.bounds.height = 1537
        //game.world.setBounds(0, 0, 10927, 1537);
        this.add.image(0, 0, 'FondoNivelUno').setOrigin(0).setScale(.5);
        this.add.image(5450, 0, 'FondoNivelUno').setOrigin(0).setScale(.5);
        //PLATAFORMAS
        //this.add.image(0, 680, 'SueloNivelUno').setOrigin(0).setScale(.5);
        platform = this.physics.add.staticGroup();
        platform.setOrigin(0);
        platform.create(0, 718, 'SueloNivelUno').setScale(.5).refreshBody();
        platform.create(2500, 718, 'SueloNivelUno').setScale(.5).refreshBody();
        platform.create(5500, 718, 'SueloNivelUno').setScale(.5).refreshBody();
        platform.create(8200, 718, 'SueloNivelUno').setScale(.5).refreshBody();
        platform.create(500, 520, 'p1');
        platform.create(1200, 520, 'p1');
        platform.create(850, 330, 'p1');
        platform.create(1750,330, 'p2');
        platform.create(2500,520, 'p2');
        platform.create(1750, 150, 'p1');
        platform.create(2500, 150, 'p1');
        platform.create(3300, 520, 'p1');
        platform.create(3750, 330, 'p1');
        platform.create(4300, 330, 'p1');
        platform.create(5000, 330, 'p1');
        platform.create(4800, 520, 'p1');
        platform.create(5800,520, 'p2');
        platform.create(6400, 330, 'p1');
        platform.create(7000, 150, 'p1');
        platform.create(6800, 520, 'p1');
        platform.create(5800, 150, 'p1');
        platform.create(7500, 330, 'p1');
        platform.create(8200, 520, 'p2');
        platform.create(9000, 330, 'p2');
        //CASA
        this.add.image(10450, 450, 'casita').setScale(.5);
        this.add.image(1250, 720, 'teclas').setScale(.5).setScrollFactor(0);
        this.add.image(70, 720, 'uigel').setScale(.7).setScrollFactor(0);
        //PERSONAJE
        player = this.physics.add.sprite(100, 590, 'Jugador');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        player.setScale(2);
        this.cameras.main.startFollow(player);

        //ANIMACION
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Jugador', { start:0, end: 3}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{key: 'Jugador', frame: 4}],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('Jugador', { start: 5, end: 8}),
            frameRate: 10,
            repeat: -1
        });
        this.physics.add.collider(player, platform);
        //TECLADO
        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        }
        //ALCOHOLES
        desinfectante = this.physics.add.group({
            key: 'gel',
            repeat: 200,
            setXY: { x: 30, y: 0, stepX: 350 }
        })
        desinfectante.children.iterate(function (child) 
        {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            
        }),
        this.physics.add.collider(desinfectante, platform); 
        this.physics.add.overlap(player, desinfectante, this.collectGel, null, this);
        //ENEMIGOS


        textopuntos = this.add.text(120, 700, '30/0', { fontSize: '32px', fill: '#000' });
        textopuntos.setScrollFactor(0);
    }

    update(){
        //MOVIMIENTO JUGADOR
        if (cursors.left.isDown)
        {
            player.setVelocityX(-500);
            player.anims.play('left', true);


        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(500);
            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);
            player.anims.play('turn');
        }
        if (cursors.up.isDown && player.body.touching.down){
            player.setVelocityY(-430);
        }
    }

    collectGel (player, desinfectante) 
    {
        desinfectante.disableBody(true, true);
        puntos += 1;
        textopuntos.setText('30/' + puntos);
        
    }
    hitEnemigo(player, contagio) 
    {
        this.physics.pause();     
        player.setTint(0xffFF00);    
        player.anims.play('turn'); 
    }

}