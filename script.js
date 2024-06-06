class Example extends Phaser.Scene {
    constructor() {
      super('Example');
    }
  
    preload() {
      this.load.image('sky', 'https://play.rosebud.ai/assets/kosovo3.jpg?xyry');
      this.load.image('logo', 'https://play.rosebud.ai/assets/Rita Ora.head.png?UFYK');
      this.load.image('red', 'https://play.rosebud.ai/assets/red.png?JJBo');
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
  
      const logo = this.physics.add.image(400, 100, 'logo');
  
      logo.setVelocity(100, 200);
      logo.setBounce(0.8, 0.8);
      logo.setCollideWorldBounds(true);
  
      emitter.startFollow(logo);
      this.add.text(20, 100, 'Make Rita Famous', { font: 'bold 42px Veranda', fill: '#fdfcfc' });
  
      // Create a clickable button or text for scene transition
      const startButton = this.add.text(400, 500, 'Start Game', { font: 'bold 40px Arial', fill: '#000501' });
      startButton.setInteractive();  // Make the text interactive
  
      // Handle click event to switch scenes
      startButton.on('pointerdown', () => {
        console.log('Start Game button clicked');
        this.scene.start('NewScene'); // Replace 'NewScene' with your actual scene key
      });
    }
  }
  
  class NewScene extends Phaser.Scene {
    constructor() {
      super('NewScene');
    }
  
    preload() {
      this.load.image('landfill', 'https://play.rosebud.ai/assets/red-carpet1.jpg?KH7Z?awDJ');
      this.load.image('junkman', 'https://play.rosebud.ai/assets/award-collector.car.png?dUxt');
      //this.load.image('title_the', 'https://play.rosebud.ai/assets/title_the.png.png?hE5R');
      //this.load.image('title_junkman', 'https://play.rosebud.ai/assets/title_junkman.png.png?Dmft');
      this.load.image('crumpled_paper', 'https://play.rosebud.ai/assets/award1.png?R7NK');
      this.load.image('particle', 'https://play.rosebud.ai/assets/emitter_green.png.png?3iPM');
      this.load.audio('metal', 'https://play.rosebud.ai/assets/metal.mp3.mp3?Q65K');
      this.load.audio('boss_junkman', 'https://play.rosebud.ai/assets/boss_junkman.mp3.mp3?AZJ1');
      this.load.image('newSceneBackground', 'https://play.rosebud.ai/assets/Generate a background image of a Beirut food stall.png?ImMj'); // Replace with your image path
    }
  
    create() {
      const positions = [
        { x: 650, y: 550, scale: 0.1 },
        { x: 360, y: 540, scale: 0.35 },
        { x: 400, y: 360, scale: 0.08 },
        { x: 730, y: 390, scale: 0.15 },
        { x: 190, y: 250, scale: 0.08 },
        { x: 240, y: 385, scale: 0.18 },
        { x: 510, y: 410, scale: 0.22 },
        { x: 473, y: 185, scale: 0.05 },
        { x: 73, y: 365, scale: 0.07 },
        { x: 490, y: 295, scale: 0.09 },
        { x: 450, y: 580, scale: 0.7 },
        { x: 770, y: 160, scale: 0.07 },
        { x: 120, y: 250, scale: 0.13 },
        { x: 40, y: 30, scale: 0.1 },
        { x: 730, y: 570, scale: 1.0 },
      ];
  
      this.sound.play('metal');
  
      this.time.delayedCall(800, () => {
        this.sound.play('boss_junkman');
      });
  
      this.add.image(400, 300, 'landfill').setScale(.75);
      const junkman = this.add.image(630, 340, 'junkman').setScale(0.25);
  
      let counter = 0;
      const counterText = this.add.text(20, 550, 'Music Awards: 0', { font: '24px Arial', fill: '#ffffff' });
  
      let timeLeft = 30;
      const timerText = this.add.text(30, 390, '30', { font: '160px Arial', fill: '#ffffff' });
      const timedEvent = this.time.addEvent({
        delay: 1000,
        callback: () => {
          timeLeft--;
          timerText.setText('' + timeLeft);
          if (timeLeft === 0) {
            this.add.text(400, 300, 'You lose!', { font: '50px Arial', fill: '#ffffff' }).setOrigin(0.5);
            timedEvent.remove(); // Stop the timed event
          }
        },
        callbackScope: this,
        loop: true
      });
  
      for (let i = 0; i < 15; i++) {
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
            counterText.setText('Trash picked up: ' + counter);
            if (counter === 15) {
              this.add.text(400, 300, 'You win!', { font: '50px Arial', fill: '#ffffff' }).setOrigin(0.5);
              timedEvent.remove(); // Stop the timed event
            }
          }
        }, this);
  
        crumpled_paper.setDepth(1);
      }
      
      let title_the = this.add.image(160, -100, 'title_the').setScale(1);
      let title_junkman = this.add.image(500, 800, 'title_junkman').setScale(1);
  
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
        delay: 3000,
        loop: false,
        callback: () => {
          // Add the background image here
          const background = this.add.image(400, 300, 'newSceneBackground');
          background.setScale(2); // Example: Scale the image by 2x
  
          // Add "Return to start" button
          const returnButton = this.add.text(20, 20, 'Return to Start', { font: 'bold 20px Arial', fill: '#000501' });
          returnButton.setInteractive();
  
          // Handle click event to switch back to start scene
          returnButton.on('pointerdown', () => {
            console.log('Return to Start button clicked');
            this.scene.start('Example');
          });
  
          // Add the requested text to the NewScene
          this.add.text(400, 20, 'Kosovo 1990', { font: 'bold 50px Courier New', fill: '#000000' });
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
    scene: [Example, NewScene], // Register scenes here
  };
  
  const game = new Phaser.Game(config);