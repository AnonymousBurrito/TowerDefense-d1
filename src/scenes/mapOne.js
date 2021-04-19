import Phaser, {Scene} from 'phaser';


class MapOne extends Scene {

    constructor(){
        super('mapOne');
    }

    preload(){
        this.load.image('map', 'assets/Maps/mapOne.png');
    }

    create(){
        this.add.image(330,200, 'map').setScale(1);
    }
}

export default MapOne;