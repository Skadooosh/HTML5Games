export default class Player extends Phaser.Sprite {
    constructor({game,x,y,asset,frame,hp}) {
        super(game,x,y,asset,frame)
        
        this.game = game;
        this.game.physics.arcade.enable(this);
        this.anchor.set(.5);

        this.hp = hp;
        this.maxHP = hp;

        this.x += this.width
        this.y -= this.height/2;

        this.animations.add('walk',[9,10]);
        this.animations.play('walk',4,true);
    }

    update () {

    }
}