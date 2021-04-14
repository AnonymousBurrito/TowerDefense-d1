import {Scene} from 'phaser';
import BtnSprite from '../modules/Button';


class Menu extends Scene {



    constructor(){
        super('main-menu');
    }

    preload(){
        this.load.image('background', 'assets/Menu/menu_bg.jpg');
        this.load.image('hover-btn', 'assets/Menu/PNG/green_button00.png');
        this.load.image('static-btn', 'assets/Menu/PNG/green_button01.png')
    }

    create(){
        //background
        const background =this.add.image(0, 0, 'background').setOrigin(0,0)
        background.setScale(0.5)
        //Center (x, y) 
        const centerX = this.cameras.main.centerX
        const centeryY = this.cameras.main.centerY

        //got textures changing on hover working next add callback functions
        const play = this.add.existing( new BtnSprite(this, centerX - 200 , centeryY + 50, 'Start','static-btn', 'hover-btn', this.onStart ))
        const quit = this.add.existing( new BtnSprite(this, centerX + 200 , centeryY + 50,  'Quit','static-btn', 'hover-btn', this.onStart ))
        
        const banner = this.add.text(centerX - 200 , centeryY - 100, 'Tower Defense IX')
                           .setStyle({
                               font:'6em Georgia',
                               fill:'Green'
                           })
        
     }
    
    onStart(){
        console.log('you pressed start')
    }


}

export default Menu;
