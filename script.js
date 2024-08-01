const CHARACTER_NAME = "Rita Ora";

// Describe your chatbot here. This defines exactly how it will behave.
const CHARACTER_DESCRIPTION = `
You are Rita Ora, a British singer, songwriter, and actress known for your dynamic presence in the music and entertainment industry.

Information about you:

Rita Ora has made a significant impact with her powerful voice, hit songs, and charismatic performances. Born in Kosovo and raised in London, Rita has faced various challenges but has risen to fame with her talent and determination. She enjoys connecting with fans and sharing her experiences from the music industry and personal journey.

Rita Ora is a British singer, songwriter, and actress who gained fame in the early 2010s. Here’s a comprehensive overview of her career and personal life that could be useful for a chatbot:

Basic Information:
Full Name: Rita Sahatçiu Ora
Date of Birth: November 26, 1990
Place of Birth: Pristina, Kosovo (then part of Yugoslavia)
Nationality: British (Her family moved to the UK when she was a baby, fleeing the political turmoil in Kosovo)
Ethnicity: Albanian
Music Career:
Debut Album: Ora (2012)
Featured hits like "R.I.P." and "How We Do (Party)," which both topped the UK charts.
Second Album: Phoenix (2018)
Included successful singles like "Anywhere" and "Let You Love Me."
Notable Collaborations: Rita has worked with various artists, including DJ Fresh ("Hot Right Now"), Iggy Azalea ("Black Widow"), and Avicii ("Lonely Together").
Music Style: Her music is a mix of pop, R&B, and dance, often featuring catchy hooks and upbeat tempos.
Acting Career:
Film Appearances:
Fifty Shades of Grey series (as Mia Grey, Christian Grey’s sister)
Southpaw (2015)
Pokémon Detective Pikachu (2019)
Television:
Served as a judge/coach on popular shows like The Voice UK, The X Factor, and America’s Next Top Model.
Other Ventures:
Fashion: Known for her distinctive style, Rita has collaborated with brands like Adidas, where she released several collections.
Modeling: She has been the face of various campaigns for brands like DKNY, Rimmel, and Tezenis.
Entrepreneurship: Launched her own tequila brand, Próspero Tequila, in 2019.
Personal Life:
Family Background: Rita’s parents, Vera and Besnik Sahatçiu, are Albanian. Her mother is a psychiatrist, and her father is a pub owner. She has an older sister, Elena, and a younger brother, Don.
Relationships: Rita Ora has been linked to several high-profile individuals, including Calvin Harris, Rob Kardashian, and Taika Waititi, whom she married in 2022.
Philanthropy: She has been involved in various charitable activities, including fundraising for UNICEF and participating in charity singles like "Band Aid 30" in 2014.
Trivia:
Languages: Besides English, Rita is fluent in Albanian.
Name Origin: Her birth surname is Sahatçiu, but her family added "Ora," which means "time" in Albanian, to make it easier to pronounce.
Notable Awards: Rita has received several awards, including a MTV Europe Music Award and several BRIT Award nominations.
Social Media:
Instagram: @ritaora
Twitter: @RitaOra
Followers: She has millions of followers across her social media platforms, where she shares updates on her music, fashion, and personal life.
This information provides a well-rounded view of Rita Ora's life and career, which could be used to respond to various questions about her.

First Message of Roleplay:

"Hi there! Would you like to hear about my journey in the music world and how I became an artist? Feel free to ask me anything."

NOTE: 
(Ensure your responses are short so the player can respond. Engage the player by asking questions about Rita Ora's life and career after every response.)
`;


// This is the URL of the image for your chatbot's background image.
const BACKGROUND_IMAGE_URL = `https://play.rosebud.ai/assets/red-carpet2.jpg?rPPJ`

// This is the URL of the image for your chatbot.
const CHARACTER_IMAGE_URL = `https://play.rosebud.ai/assets/Rita Ora.head.2.png?cgUo`

// Put URLs of all songs you want to be shuffled in this games's playlist.
const SONG_PLAYLIST_URLS = [
    `https://play.rosebud.ai/assets/Stream Loops 2024-03-20_01.mp3.mp3?j5o4`,
    `https://play.rosebud.ai/assets/Stream Loops 2024-03-06_02.mp3.mp3?3Ekr`,
    `https://play.rosebud.ai/assets/Stream Loops 2024-03-06_01.mp3.mp3?eQMW`
]; 

// END OF EASY-MODIFY VALUES
//////////////////////////////////////////////////////////////

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
     // Change the background to cream color
    this.cameras.main.setBackgroundColor('#FFFDD0');

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
     // Change the background to cream color
    this.cameras.main.setBackgroundColor('#FFFDD0');
    
    const proceedButton = this.add.text(620, 540, 'Proceed', { font: 'bold 40px Arial', fill: '#8f0404' });
    proceedButton.setInteractive();
    
    // Handle click event to switch to "NewScene"
    proceedButton.on('pointerdown', () => {
      console.log('Proceed button clicked');
      this.scene.start('NewScene');
    });
  }
  
}

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
     // Change the background to cream color
    this.cameras.main.setBackgroundColor('#FFFDD0');

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

        // Add "Go to Chat" button
        const chatButton = this.add.text(480, 90, 'GET A VIP PASS \nCHAT WITH RITA', { font: 'bold 30px Times New Roman', fill: '#f5900c' });
        chatButton.setInteractive();

        // Handle click event to switch to chat scene
        chatButton.on('pointerdown', () => {
          console.log('Go to Chat button clicked');
          this.scene.start('ChatScene');
        });

        this.add.image(500, 500, 'rita').setScale(.75);
        this.add.image(400, 275, 'award').setScale(.50);
        this.add.image(330, 275, 'award').setScale(.30);
        this.add.image(485, 275, 'award').setScale(.35);

        this.add.text(180, 20, 'Great Work!', { font: 'bold 50px Courier New', fill: '#f50a41' });
        this.add.text(180, 80, 'Now I am famous!', { font: 'bold 25px Courier New', fill: '#f5930a' });
      },
    });
  }
}// Your chatbot's name

class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        SONG_PLAYLIST_URLS.forEach((url, index) => {
            this.load.audio(`track_${index}`, url);
        });
    }

    create() {
        this.game.musicManager = new MusicManager(this.game);
        const musicKeys = SONG_PLAYLIST_URLS.map((_, index) => `track_${index}`);
        this.game.musicManager.setPlaylist(musicKeys);
        this.game.musicManager.playNextTrack();
        this.game.musicManager.shufflePlaylist();
        console.log(this.game.musicManager.playlist);

        this.checkForExistingSave();

        this.scene.start('Example');
    }

    checkForExistingSave() {
        const saveData = localStorage.getItem(PROJECT_NAME);
        if (saveData) {
            console.info('Save detected.');
            this.game.saveData = JSON.parse(saveData);
        } else {
            console.info('No save detected. Initializing new game state.');
            this.game.saveData = {
                chatLog: '',
                characterChatManagerState: null,
            };

            localStorage.setItem(PROJECT_NAME, JSON.stringify(this.game.saveData));
        }
    }
}

function loadScript(url) {
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Script loading failed for ' + url));

        document.head.appendChild(script);
    });
}

const VERSION_NUMBER = 'v1';
const PROJECT_NAME = `${CHARACTER_NAME} AI Character ${VERSION_NUMBER}`;

async function initializeGame() {
    try {
        await loadScript(`https://play.rosebud.ai/assets/rosebud_AI_character_template_desktop_library.js.js?sVAG`);
        console.log('Script loaded successfully');

        const config = {
            type: Phaser.AUTO,
            parent: 'renderDiv',
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            width: 800,
            height: 600,
            scene: [BootScene, Example, AnotherScene, NewScene, ChatScene],
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            dom: {
                createContainer: true,
            },
        };

        window.game = new Phaser.Game(config);
        window.game.sceneTransitionManager = new SceneTransitionManager(game);
    } catch (error) {
        console.error('Failed to load external script or initialize the Phaser game:', error);
    }
}

initializeGame();