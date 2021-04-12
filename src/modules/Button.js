import Phaser from 'phaser';

export default class BtnSprite extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, secondTexture ){
        super(scene, x, y, texture);

        this.scene.add.existing(this)

        this.setInteractive({useHandCursos: true})
            .on('pointerover', () => { this.setTexture(secondTexture) } )
            .on('pointerout', () => { this.setTexture(texture) })

    }

    changeHoverImage(){
        this.scene.load.image('hover', 'assets/Menu/PNG/blue_button00.png')
        this.scene.add.Sprite(400, 200, 'hover');
    }

}