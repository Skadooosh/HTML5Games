import Phaser from 'phaser'

export default class Player extends Phaser.Sprite {
    constructor({game,x,y,asset,frame,hp}) {
        super(game,x,y,asset,frame)
        
        this.game = game;
        this.game.physics.arcade.enable(this);
        this.anchor.set(.5);

        this.hp = hp;
        this.maxHP = hp;
        this.JUMPSPEED = -1000;

        this.x += this.width
        this.y = 200;
        this.jumpTimer = 0;

        this.animations.add('walk',[9,10]);
        this.animations.play('walk',4,true);

        this.body.collideWorldBounds = true;
        this.game.physics.arcade.gravity.y = 2600;
      
        this.cursors = game.input.keyboard.createCursorKeys();
        this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }
  
    update () {

        this.body.velocity.x = 0;

    if (this.jumpButton.isDown && this.body.onFloor() && game.time.now > this.jumpTimer)
        {
        this.body.velocity.y = this.JUMPSPEED;
        this.jumpTimer = game.time.now + 750;
        
    }
        

    }
    jump() {

    }
}