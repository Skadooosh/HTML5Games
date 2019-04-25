import Phaser from 'phaser'
import Parallax from '../Parallax'
import Player from '../prefab/player'
import Enemy from '../prefab/enemy'


export default class extends Phaser.State {
    create () {


        this.bg = new Parallax ({
            game : this.game,
            x : this.world.centerX,
            y : this.world.centerY,
            width : 1024,
            height : 768,
            asset : 'scroll-bg',
            speed : 2,
        })
        this.game.add.existing(this.bg);
        
        this.trap = this.add.sprite(this.game.width/2, this.game.world.height,'trap')
        this.trap.anchor.set(.5);
        this.trap.y -= this.trap.height/2;

        
        this.cover = this.add.sprite(this.game.width/2, this.game.world.height,'bush');
        this.cover.anchor.set(.5);
        this.cover.y -= this.cover.height;
        this.cover.scale.set(2);

        this.backGroup = this.add.group();

        this.bgold = new Parallax ({
            game : this.game,
            x : this.world.centerX,
            y : this.world.centerY,
            width : 1024,
            height : 768,
            asset : 'scroll-bg-old',
            speed : 2,
        })
        this.game.add.existing(this.bgold);

        this.backGroup.add(this.bgold);
        this.backGroup.add(this.trap);

        

        

        this.mask = this.add.graphics(0,0);
        this.mask.beginFill(0xa3a3a3);
        this.mask.drawCircle(0,0,200,300);
        this.backGroup.mask = this.mask;
        this.input.addMoveCallback(this.move,this);

        
        



        
        this.title = this.add.text(this.game.world.centerX, this.game.world.centerY - 250,'ENDLESS RUNNER', 
        {
            font : "36px Trebuchet MS",
            align : 'center'
        })
        this.title.anchor.set(.5);

        this.enemy = this.add.group();
        this.enemy.enableBody = true;

        this.player = new Player ({
            game : this.game,
            x : 0,
            y : this.game.height,
            hp : 100,
            asset : 'player',
            frame : 0
        })
        
        this.game.add.existing(this.player)
        this.game.stage.addChild(this.player);



 



    }
    move (pointer,x,y) {
        this.mask.x = x;
        this.mask.y = y;
       
    }
    update() {
    }
 
}