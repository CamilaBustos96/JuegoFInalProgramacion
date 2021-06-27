class nivel2 extends Phaser.Scene {
    constructor(){
        super('Nivel2')
    }
    preload(){
        this.load.audio('saltito', './Assets/Musica/salto.mp3');
        this.load.audio('sonidosgel', './Assets/Musica/recoger_gel.mp3');
        this.load.audio('die', './Assets/Musica/muerte.mp3');
        this.load.audio('dañado', './Assets/Musica/daño.mp3');
        this.load.audio('winner', './Assets/Musica/ganador.mp3');

        this.load.image('Fondo2', './Assets/FondoNivel2.png');
        this.load.image('plataforma2', './Assets/plataformagrandenivel2.png');
        this.load.spritesheet('Jugador', './Assets/dude.png', { frameWidth: 32, frameHeight: 48});
        this.load.image('plataforma1', './Assets/plataforma1.png');
        this.load.image('Suelo2', './Assets/plataformapisonivel2.png');
        this.load.image('teclas', './Assets/controles.png');
        this.load.image('corazon', './Assets/vida.png');
        this.load.image('cronometro', './Assets/Tiempo.png');
        this.load.image('uigel', './Assets/gelecito.png');
        this.load.image('gel', './Assets/alcohol.png');
        this.load.image('poli1', './Assets/policia1.png');
        this.load.image('poli2', './Assets/policia2.png');
        this.load.image('policias', './Assets/policias.png');
        this.load.image('corona', './Assets/enemigocovid.png');
        this.load.image('cubrebocas', './Assets/tapabocas.png');
        this.load.image('mascara', './Assets/mascarilla.png');
        this.load.image('vacunita', './Assets/vacuna.png');
        this.load.image('casita', './Assets/casita.png');
    }
    create(){
        //CAMARA
        this.cameras.main.setBounds(0, 0, 10500, 768)
        this.physics.world.bounds.width = 10500
        this.physics.world.bounds.height = 1537
        //SONIDOS
        this.sonidosalto = this.sound.add('saltito',{
            loop: false
        });
        this.recogergel = this.sound.add('sonidosgel', {
            loop: false
        })
        this.sonidomuerte = this.sound.add('die', {
            loop: false
        })
        this.superganador = this.sound.add('winner', {
            loop: false
        })
        //Fondo
        this.add.image(0, 0, 'Fondo2').setOrigin(0).setScale(.5);
        this.add.image(5460, 0, 'Fondo2').setOrigin(0).setScale(.5);
        //PLATAFORMAS
        plataformados = this.physics.add.staticGroup();
        plataformados.setOrigin(0);
        plataformados.create(680, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(2040, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(3400, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(4760, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(6120, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(7480, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(8840, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(10200, 718, 'Suelo2').setScale(.5).refreshBody();
        plataformados.create(700, 520, 'plataforma2');
        plataformados.create(1150, 330, 'plataforma1');
        plataformados.create(1500, 520, 'plataforma1');
        plataformados.create(2000, 330, 'plataforma2');
        plataformados.create(2600, 150, 'plataforma2');
        plataformados.create(2500, 520, 'plataforma1');
        plataformados.create(3100, 520, 'plataforma1');
        plataformados.create(3600, 330, 'plataforma1');
        plataformados.create(4000, 150, 'plataforma1');
        plataformados.create(4550, 330, 'plataforma2');
        plataformados.create(5100, 150, 'plataforma1');
        plataformados.create(5300, 520, 'plataforma2');
        plataformados.create(5800, 330, 'plataforma1');
        plataformados.create(6300, 150, 'plataforma1');
        plataformados.create(6300, 520, 'plataforma1');
        plataformados.create(6900, 330, 'plataforma2');
        plataformados.create(7600, 520, 'plataforma2');
        plataformados.create(8100, 330, 'plataforma1');
        plataformados.create(8300, 150, 'plataforma1');
        plataformados.create(9000, 520, 'plataforma2');
        plataformados.create(9500, 330, 'plataforma1');
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
        this.physics.add.collider(player, plataformados);
        //TECLADO
        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        }
        //UI
        this.add.image(1250, 720, 'teclas').setScale(.5).setScrollFactor(0);
        this.add.image(150, 60, 'uigel').setScale(.9).setScrollFactor(0);
        this.add.image(1250, 50, 'cronometro').setScale(.4).setScrollFactor(0);
        this.add.image(80, 720, 'corazon').setScale(.9).setScrollFactor(0);
        //ALCOHOLES
        desinfectante = this.physics.add.group({
            key: 'gel',
            repeat: 200,
            setXY: { x: 30, y: 0, stepX: 300 }
        });
        desinfectante.children.iterate(function (child) 
        {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
                    
        });
        this.physics.add.collider(desinfectante, plataformados); 
        this.physics.add.overlap(player, desinfectante, this.collectGel, null, this);
        //POLICIA
        yuta = this.physics.add.group();
        yuta.create(500, 330, 'policias').setScale(.7);
        yuta.create(1200, 500, 'poli1').setScale(.7);
        yuta.create(1100, 200, 'policias').setScale(.7);
        yuta.create(2000, 300, 'poli2').setScale(.7);
        yuta.create(2800, 500, 'poli1').setScale(.7);
        yuta.create(4000, 500, 'policias').setScale(.7);
        yuta.create(4800, 500, 'policias').setScale(.7);
        yuta.create(4650, 200, 'policias').setScale(.7);
        yuta.create(5860, 200, 'poli2').setScale(.7);
        yuta.create(6800, 500, 'policias').setScale(.7);
        yuta.create(7700, 200, 'policias').setScale(.7);
        yuta.create(8870, 200, 'policias').setScale(.7);
        this.physics.add.collider(yuta, plataformados);
        //CORONA
        virus = this.physics.add.group();
        virus.create(2000, 100, 'corona').setScale(.7);
        virus.create(2500, 300, 'corona').setScale(.7);
        virus.create(3500, 300, 'corona').setScale(.7);
        virus.create(3600, 100, 'corona').setScale(.7);
        virus.create(4400, 300, 'corona').setScale(.7);
        virus.create(5300, 200, 'corona').setScale(.7);
        virus.create(5800, 500, 'corona').setScale(.7);
        virus.create(6300, 300, 'corona').setScale(.7);
        virus.create(6800, 100, 'corona').setScale(.7);
        virus.create(8100, 100, 'corona').setScale(.7);
        virus.create(8300, 300, 'corona').setScale(.7);
        virus.create(9700, 500, 'corona').setScale(.7);
        //virus.physicsBodyType = Phaser.Physics.ARCADE;
        //var animacion = game.add.tween(virus).to({x: 100}, 5000, Phaser.Easing.Linear.None, true, 0, 5000, true);
        //tween = this.game.add.tween(virus).to( { x: 100 }, 5000, Phaser.Easing.Linear.None, true, 0, 5000, true);
        this.physics.add.collider(virus, plataformados);
        //TAPABOCAS
        for (var i = 0; i < 1; i++){
            var x= Phaser.Math.Between(500,9000);
            var y= Phaser.Math.Between(100, 600);
            barbijo = this.physics.add.group({
                key: 'cubrebocas',
                setXY: {x, y, stepX:1000, stepY: 100}
            })
        }
        this.physics.add.collider(barbijo, plataformados);
        this.physics.add.collider(player, barbijo, this.power1, null, this);
        //MASCARA
        for (var i = 0; i < 1; i++)
        {
            var x= Phaser.Math.Between(500, 9000);
            var y= Phaser.Math.Between(100, 600);
            mascarita = this.physics.add.group({
                key: 'mascara',
                setXY: {x, y, stepX:1000, stepY: 100 }
            });
        }
        this.physics.add.collider(mascarita, plataformados);
        this.physics.add.collider(player, mascarita, this.power2, null, this);
        //VACUNA
        for (var i = 0; i < 1; i++){
            var x= Phaser.Math.Between(500, 5000);
            var y= Phaser.Math.Between(100, 600);
            vacunacion = this.physics.add.group({
                key: 'vacunita',
                setXY: {x, y, stepX: 5000, stepY: 100}
            })
        }
        this.physics.add.collider(vacunacion, plataformados);
        this.physics.add.collider(player, vacunacion, this.vacunado, null, this);
        //CASA
        ganarCasita = this.physics.add.staticGroup();
        ganarCasita.create(10450, 450, 'casita').setScale(.5);
        this.physics.add.collider(player, ganarCasita, this.ganarpartida, null, this);
        //TIEMPO
        TiempoInicial = 70
        TimeEvent = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this, loop: true });
        timeText = this.add.text(1190, 30, '', {fontSize: '50px', fill: '#FFF'});
        timeText.setScrollFactor(0);
        //VIDAS
        textoVidaJugador = this.add.text(45, 700, ' 3', { fontSize: '40px', fill: '#FFF' });
        textoVidaJugador.setScrollFactor(0);
        this.physics.add.collider(player, yuta, this.atrapado, null, this);
        this.physics.add.collider(player, virus, this.rip, null, this);
        //TEXTOPUNTAJE
        textopuntosnivel = this.add.text(150, 50, '30/0', { fontSize: '30px', fill: '#FFF' });
        textopuntosnivel.setScrollFactor(0);

    }
    update()
    {
        //MOVIMIENTO
        if (cursors.left.isDown){
            player.setVelocityX(-450);
            player.anims.play('left', true);
        }
        else if (cursors.right.isDown){
            player.setVelocityX(450);
            player.anims.play('right', true);
        }
        else{
            player.setVelocityX(0);
            player.anims.play('turn');
        }
        if (cursors.up.isDown && player.body.touching.down){
            this.sonidosalto.play();
            player.setVelocityY(-430);
        }
    }
    collectGel (player, desinfectante) 
    {
        desinfectante.disableBody(true, true);
        puntosnivel += 1;
        textopuntosnivel.setText('30/' + puntosnivel);
        this.recogergel.play();
        
    }
    atrapado(player, yuta)
    {
        yuta.destroy();
        vidaJugador -= 1;
        textoVidaJugador.setText(' ' + vidaJugador);
        if (vidaJugador === 0)
        {
            this.gameOver()
        }
    }
    rip(player, virus){
        virus.destroy();
        if (vidaJugador < 3){
            this.gameOver()
        }
    }
    gameOver() 
    {
        this.physics.pause();
        player.setTint(0xffFF00);
        player.anims.play('turn');
        TimeEvent.paused = true;
        puntosnivel = 0;
        vidaJugador = 3;
        this.sonidomuerte.play();
        this.scene.start('gameovernivel')
        
    }
    timer() {

        if (! gameOver) {    

            TiempoInicial = TiempoInicial - 1; 

            timeText.setText(' ' + TiempoInicial);

        if (TiempoInicial == 0) {

            TimeEvent.paused = true;

            this.gameOver()

            }            
        }
        
    }
    power1(player, barbijo) 
    {
        barbijo.disableBody(true, true);
        vidaJugador += 1;
        textoVidaJugador.setText(' ' + vidaJugador);    
    }
    power2(player, mascarita) 
    {
        mascarita.destroy();
        TiempoInicial += 5;
        timeText.setText(' ' + TiempoInicial);           
    }
    vacunado(player, vacunacion)
    {
        vacunacion.destroy();
        if (vidaJugador  >= 3){
            puntosnivel +=10;
            textopuntosnivel.setText('30/' + puntosnivel);
        } else {
            TiempoInicial += 15;
            timeText.setText(' ' + TiempoInicial);
        }
        
    }
    ganarpartida(player, ganarCasita)
    {   
        if (puntosnivel >= 30){
            this.superganador.play();
            this.ganaste()
        }

    }
    ganaste()
    {
        this.scene.start('winnivel')

    }

}