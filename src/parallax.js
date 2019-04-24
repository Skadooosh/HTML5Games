import Phaser from 'phaser'

export default class extends Phaser.TileSprite {
    constructor ({ game, x, y,width,height, asset, speed}) {

        super(game,x,y,width,height,asset);
        this.anchor.set(.5);
        this.SPEED = speed;
    }

    update () {
        this.tilePosition.x -= this.SPEED;
        
    }
}