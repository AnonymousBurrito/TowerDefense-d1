import Phaser, {Scene} from 'phaser';


class MapOne extends Scene {

    constructor(){
        super('map-one');
    }

    preload(){
        this.load.image('background', 'assets/Maps/mapOne.png');
    }

    create(){
        this.add.image(330,200, 'background').setScale(1);
    }
}

export default MapOne;