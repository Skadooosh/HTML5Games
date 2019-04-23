import 'pixi'
import 'p2'
import Phaser from 'phaser'

class Game extends Phaser.Game {
    constructor() {
        const width = 1024;
        const height = 768;
        
        super(width, height, Phaser.CANVAS,'content',null)
        // Add States here  
        // Start State
    }
}

window.game = new Game()