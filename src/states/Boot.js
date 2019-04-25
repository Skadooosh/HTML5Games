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

        this.load.image("gem-1","Asset/Collectable/gem-blue.png")
        this.load.image("gem-2","Asset/Collectable/gem-green.png")
        this.load.image("gem-3","Asset/Collectable/gem-orange.png")
        this.load.image("gem-4","Asset/Collectable/gem-yellow.png")
        this.load.image("arrow","Asset/Collectable/pointed-arrow.png")
        this.load.image("saw","Asset/Collectable/saw.png")

        this.game.load.spritesheet('player', 'Asset/adventurer_tilesheet.png', 80, 110, 25);

    }

    create () {

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;

        this.state.start('Game')
    }
}