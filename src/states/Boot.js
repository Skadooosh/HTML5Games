import Phaser from 'phaser'

export default class extends Phaser.State {
    init () {
        
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    
    }
    
    preload () {
        
        this.load.image("scroll-bg","Asset/Backgrounds/BackgroundColorGrass.png");
        this.load.image("cloud-layer-1","Asset/PNG/Default/cloud1.png")
        this.load.image("cloud-layer-2","Asset/PNG/Default/cloud2.png")
        this.load.image("cloud-layer-3","Asset/PNG/Default/cloud3.png")

    }

    create () {
        console.log("game")
        this.state.start('Game')
    }
}