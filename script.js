class Example extends Phaser.Scene {
  constructor() {
    super('Example');
  }
//start screen images
  preload() {
    this.load.image('sky', 'https://play.rosebud.ai/assets/kosovo3.jpg?PVxN');
    this.load.image('logo', 'https://play.rosebud.ai/assets/Rita Ora.head.png?TAz2');
    this.load.image('red', 'https://play.rosebud.ai/assets/red.png?dj5S');
  }

  create() {
    document.title = "Make Rita Famous"; // Changes the title of the webpage

    this.add.image(400, 300, 'sky');

    const particles = this.add.particles('red');
    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });
    //start screen text and image movement
    const logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(0.8, 0.8);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
    this.add.text(20, 80, 'Make Rita Famous...', { font: 'bold 60px Courier New', fill: '#f54085' });
    this.add.text(420, 140, 'Rita Ora, Born in war-torn', { font: 'bold 20px Courier New', fill: '#000000' });
    this.add.text(420, 160, 'Kosovo in 1990.', { font: 'bold 20px Courier New', fill: '#000000' });
    
    this.add.text(420, 200, 'Moved to London as a refugee', { font: 'bold 20px Courier New', fill: '#000000' });
    this.add.text(420, 220, 'aged one.', { font: 'bold 20px Courier New', fill: '#000000' });
    

    // Create a clickable button or text for scene transition
    const startButton = this.add.text(550, 500, 'Start Game', { font: 'bold 40px Arial', fill: '#65f511' });
    startButton.setInteractive();  // Make the text interactive

    // Handle click event to switch scenes
    startButton.on('pointerdown', () => {
      console.log('Start Game button clicked');
      this.scene.start('AnotherScene'); // Replace 'NewScene' with your actual scene key
    });
  }
}

//Scene 2 -information about Rita and game instructions
class AnotherScene extends Phaser.Scene {
  constructor() {
    super('AnotherScene');
  }
preload() {
  this.load.image('rita4', 'https://play.rosebud.ai/assets/Rita Ora.png?OrQQ');
  this.load.image('award', 'https://play.rosebud.ai/assets/award1.png?2RHY');
  this.load.image('babyrita', 'https://play.rosebud.ai/assets/baby.rita.png?Yf4L');
}


  create() {
    // Add the text label with word wrapping
    const textLabel = this.add.text(20, 20, 'Rita Ora was born in Kosovo in 1990, during the Kosovo war.\n\n Her family left Kosovo for political reasons, due to persecution of Albanians initiated with the disintegration of Yugoslavia. \n They relocated to London, England in 1991, when Ora was a baby. She grew up in Notting Hill, in West London, and attended a performing arts school, Sylvia Young Theatre School. ', { font: 'bold 20px Courier New', fill: '#000002', wordWrap: { width: 760, useAdvancedWrap: true } });

    const textLabel2 = this.add.text(20, 200, ' Help Rita become famous by collecting music awards for her. \n\n Drag all of the awards into the car before the timer expires to beat the game!', { font: 'bold 28px Times New Roman', fill: '#02237d', wordWrap: { width: 760, useAdvancedWrap: true } });

    const textLabel3 = this.add.text(20, 410, 'Baby Rita', { font: '20px Courier New', fill: '#02237d', wordWrap: { width: 760, useAdvancedWrap: true } });
    


    this.add.image(400, 500, 'rita4').setScale(.55);
    this.add.image(200, 500, 'babyrita').setScale(.18);
    this.add.image(210, 540, 'award').setScale(.35);
    this.add.image(700, 400, 'award').setScale(.25);
    
    // Add the "Proceed" text button
    
    const proceedButton = this.add.text(620, 540, 'Proceed', { font: 'bold 40px Arial', fill: '#8f0404' });
    proceedButton.setInteractive();
    
    // Handle click event to switch to "NewScene"
    proceedButton.on('pointerdown', () => {
      console.log('Proceed button clicked');
      this.scene.start('NewScene');
    });
  }
  
}

//Scene 3 - the game
class NewScene extends Phaser.Scene {
  constructor() {
    super('NewScene');
  }

  preload() {
    this.load.image('landfill', 'https://play.rosebud.ai/assets/London2.jpg?MEKn');
    this.load.image('junkman', 'https://play.rosebud.ai/assets/award-collector.car.png?9bB7');
    this.load.image('title_the', 'https://play.rosebud.ai/assets/Rita Ora.head.3.png?tfbE');
    this.load.image('title_junkman', 'https://play.rosebud.ai/assets/game-text.png?5wtI');
    this.load.image('crumpled_paper', 'https://play.rosebud.ai/assets/award1.png?2RHY');
    this.load.image('particle', 'https://play.rosebud.ai/assets/emitter.png?BaQV');
    this.load.audio('metal', 'https://play.rosebud.ai/assets/metal.wav?EZok');
    this.load.audio('boss_junkman', 'https://play.rosebud.ai/assets/boss_junkman.mp3.mp3?6grt');
    this.load.image('newSceneBackground', 'https://play.rosebud.ai/assets/red-carpet2.jpg?rPPJ'); // Replace with your image path
    this.load.image('rita', 'https://play.rosebud.ai/assets/Rita Ora.head.2.png?cgUo');
    this.load.image('award', 'https://play.rosebud.ai/assets/award1.png?2RHY');
    
    
  }
//position of music wards
  create() {
    const positions = [
      { x: 650, y: 300, scale: 0.15 },
      { x: 360, y: 540, scale: 0.35 },
      { x: 400, y: 360, scale: 0.08 },
      { x: 730, y: 300, scale: 0.15 },
      { x: 190, y: 250, scale: 0.08 },
      { x: 190, y: 270, scale: 0.25 },
      { x: 240, y: 385, scale: 0.18 },
      { x: 510, y: 390, scale: 0.22 },
      { x: 300, y: 250, scale: 0.05 },
      { x: 73, y: 365, scale: 0.07 },
      { x: 490, y: 295, scale: 0.09 },
      { x: 450, y: 200, scale: 0.22 },
      { x: 770, y: 160, scale: 0.07 },
      { x: 120, y: 250, scale: 0.13 },
      { x: 510, y: 30, scale: 0.1 },
      { x: 700, y: 60, scale: 0.1 },
      { x: 50, y: 90, scale: 0.3 },
      { x: 730, y: 200, scale: 0.3 },
      
    ];

    this.sound.play('metal');

    this.time.delayedCall(800, () => {
      this.sound.play('boss_junkman');
    });

    this.add.image(400, 300, 'landfill').setScale(.75);
    const junkman = this.add.image(630, 480, 'junkman').setScale(0.25);

    let counter = 0;
    const counterText = this.add.text(20, 500, 'Music Awards \n collected: 0', { font: '30px Arial', fill: '#000000' });

    let timeLeft = 30;
    const timerText = this.add.text(30, 390, '30', { font: '80px Arial', fill: '#000000' });
    const timedEvent = this.time.addEvent({
      delay: 1000,
      callback: () => {
        timeLeft--;
        timerText.setText('' + timeLeft);
        if (timeLeft === 0) {
          this.add.text(400, 300, 'Thank you! Now to the red carpet!', { font: '40px Arial', fill: '#000000' }).setOrigin(0.5);
          timedEvent.remove(); // Stop the timed event
        }
      },
      callbackScope: this,
      loop: true
    });

    for (let i = 0; i < 18; i++) {
      let x = positions[i].x;
      let y = positions[i].y;
      let scale = positions[i].scale;

      const particles = this.add.particles('particle');

      const emitter = particles.createEmitter({
        speed: 10, 
        scale: { start: 0.1, end: 0.05 },
        blendMode: 'ADD',
        lifespan: 1800,
        alpha: 0.2
      });

      const crumpled_paper = this.add.image(x, y, 'crumpled_paper').setInteractive().setScale(scale);
      crumpled_paper.setData('counted', false); // custom data property

      this.input.setDraggable(crumpled_paper);

      emitter.startFollow(crumpled_paper);

      this.input.on('dragstart', function (pointer, gameObject) {
        gameObject.setTint(0xff0000);
      });

      this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
      });

      this.input.on('dragend', function (pointer, gameObject) {
        gameObject.clearTint();
        if (!gameObject.data.values.counted && Phaser.Geom.Intersects.RectangleToRectangle(gameObject.getBounds(), junkman.getBounds())) {
          gameObject.setVisible(false);
          gameObject.data.values.counted = true;
          counter++;
          counterText.setText('Music Awards \n collected:' + counter);
          if (counter === 18) {
            this.add.text(400, 300, 'Thank you! Now to the red carpet!', { font: '50px Arial', fill: '#000000' }).setOrigin(0.5);
            timedEvent.remove(); // Stop the timed event
          }
        }
      }, this);

      crumpled_paper.setDepth(1);
    }
    
    let title_the = this.add.image(160, -100, 'title_the').setScale(0.5);
    let title_junkman = this.add.image(500, 800, 'title_junkman').setScale(1);
    this.add.text(220,20, 'QUICK...', { font: 'bold 40px Courier New', fill: '#f54085' });

    this.tweens.add({
      targets: title_the,
      y: 75,
      ease: 'Power1',
      duration: 600
    });

    this.tweens.add({
      targets: title_junkman,
      y: 110,
      ease: 'Power1',
      duration: 400
    });

    this.time.addEvent({
      delay: 31000,
      loop: false,
      callback: () => {
        // Scene 3 - end of game
        const background = this.add.image(400, 300, 'newSceneBackground');
        background.setScale(1); // Example: Scale the image by 2x

        // Add "Return to start" button
        const returnButton = this.add.text(500, 160, 'Return to Start', { font: 'bold 30px Arial', fill: '#f5d50a' });
        returnButton.setInteractive();

        // Handle click event to switch back to start scene
        returnButton.on('pointerdown', () => {
          console.log('Return to Start button clicked');
          this.scene.start('Example');
        });
        this.add.image(500, 500, 'rita').setScale(.75);
        this.add.image(400, 275, 'award').setScale(.50);
        this.add.image(330, 275, 'award').setScale(.30);
        this.add.image(485, 275, 'award').setScale(.35);
        // Add the requested text to the NewScene
        

        this.add.text(400, 20, 'Great Work!', { font: 'bold 50px Courier New', fill: '#f50a41' });
        this.add.text(180, 80, 'Now I am famous!', { font: 'bold 25px Courier New', fill: '#f5930a' });
        this.add.text(180, 100, '', { font: 'bold 25px Courier New', fill: '#f5930a' });
        this.add.text(180, 120, '', { font: 'bold 25px Courier New', fill: '#f5930a' });
      },
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'renderDiv',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
  },
  backgroundColor: '#ffcc99',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [Example, NewScene, AnotherScene], // Register scenes here
};

const game = new Phaser.Game(config);