import 'pixi'
import 'p2'
import Phaser from 'phaser'


import boot from './states/Boot'
import game from './states/Game'

class Game extends Phaser.Game {
    constructor() {
        const width = 1024;
        const height = 768;
        
        super(width, height, Phaser.CANVAS,'content',null)
        // Add States here  
       this.state.add('Boot', boot, false)
       this.state.add('Game', game, false)
       this.state.start('Boot')
        // Start State
    }
}

window.game = new Game()