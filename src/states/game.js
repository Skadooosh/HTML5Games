import Phaser from 'phaser'
import Parallax from '../Parallax'


export default class extends Phaser.State {
    create () {
    
    // this.bg = this.add.tileSprite(this.world.centerX,this.world.centerY,1024,768,'scroll-bg')
    // this.bg.anchor.set(0.5);
    //     console.log(this.bg);
    this.bg = new Parallax ({
        game : this.game,
        x : this.world.centerX,
        y : this.world.centerY,
        width : 1024,
        height : 768,
        asset : 'scroll-bg',
    })
    this.game.add.existing(this.bg);
    this.bg.SPEED = .25;
 



    }

    update() {
    }
}