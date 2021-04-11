import Phaser, {Scene} from 'phaser';
import BtnSprite from '../modules/Button';


class Menu extends Scene {



    constructor(){
        super('main-menu');
        let start;
    }

    preload(){
        this.cameras.main.setBackgroundColor('#99CDF1')
        this.load.image('start-btn', 'assets/Menu/PNG/blue_button00.png');
        this.load.image('exit-btn', 'assets/Menu/PNG/blue_button01.png')
        this.load.image('background', 'assets/Maps/mapOne.png');
    }

    create(){
       this.start = this.add.image(450, 150, 'start-btn')
       this.start.setInteractive();
       this.start.on('pointerdown', () => { console.log('fuck you') })
                 .on('pointerover', () => { this.start.setStyle({fill:'#ff0'})} )

       this.add.image(450, 250, 'exit-btn')
    }
    
    onStart(){
        console.log('you pressed start')
    }


}

export default Menu;