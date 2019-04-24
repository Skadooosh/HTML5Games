import Phaser from 'phaser'

export default class extends Phaser.State {
    init () {
        
      
    
    }
    
    preload () {
        
        this.load.image("scroll-bg","Asset/Backgrounds/BackgroundColorGrass.png");
        this.load.image("scroll-bg-old","Asset/Backgrounds/backgroundColorFall.png");
        this.load.image("cloud-layer-1","Asset/PNG/Default/cloud1.png")
        this.load.image("cloud-layer-2","Asset/PNG/Default/cloud2.png")
        this.load.image("cloud-layer-3","Asset/PNG/Default/cloud3.png")
        this.load.image("bush","Asset/PNG/Default/bush1.png")
        this.load.image("trap","Asset/PNG/Default/castleSmall.png")
        this.game.load.spritesheet('player', 'Asset/adventurer_tilesheet.png', 80, 110, 25);

    }

    create () {

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.state.start('Game')
    }
}