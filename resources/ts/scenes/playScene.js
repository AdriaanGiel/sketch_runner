"use strict";
class PlayScene extends Scene {
    constructor(game) {
        super(game);
        this.drops = [];
        this.clouds = [];
        this.gotHit = false;
        document.body.style.backgroundImage = "url('./img/background.jpg')";
        this.ground = new Ground(this.game, 0, 400);
        this.player = new Player(this.game, this.ground, this.ground.getBoundingClientRect().left - 200, this.ground.getBoundingClientRect().top - 300);
        for (let i = 0; i < 20; i++) {
            let cloud = new Cloud(this.game, Math.floor(Math.random() * -window.outerWidth), Math.floor(Math.random() * -300) + -100, this);
            cloud.rain();
            this.clouds.push(cloud);
        }
    }
    update() {
        this.player.update();
        for (let cloud of this.clouds) {
            cloud.update();
        }
        for (let drop of this.drops) {
            drop.move();
        }
        this.checkIfPlayerHasBeenHit();
    }
    makeItRain() {
        this.clouds[Math.floor(Math.random() * this.clouds.length)].rain();
    }
    checkIfPlayerHasBeenHit() {
        for (let drop of this.drops) {
            if (this.checkCollision(drop.getBoundingClientRect(), this.player.getBoundingClientRect())) {
            }
        }
    }
    addDropToWorld(drop) {
        this.drops.push(drop);
    }
}
