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
        //got textures changing on hover working next add callback functions
        this.add.existing( new BtnSprite(this, 450, 250, 'exit-btn', 'start-btn'))
    }
    
    onStart(){
        console.log('you pressed start')
    }


}

export default Menu;

/** 
        this.start = this.add.sprite(450, 150, 'start-btn')
       const startTxt = this.add.text(0,0, 'Start', { fill: '#000000'})
       startTxt.setOrigin(0.5)
       startTxt.setX(this.start.getCenter().x)
       startTxt.setY(this.start.getCenter().y)

       this.start.setInteractive();
       this.start.on('pointerdown', () => { console.log('fuck you') })
                 .on('pointerover', () => { console.log('im hovering')} )

*/