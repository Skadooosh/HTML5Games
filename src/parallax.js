import Phaser from 'phaser'

export default class extends Phaser.TileSprite {
    constructor ({ game, x, y,width,height, asset}) {

        super(game,x,y,width,height,asset);
        this.anchor.set(.5);
    }

    update () {
        this.tilePosition.x -= this.SPEED;
        
    }
}