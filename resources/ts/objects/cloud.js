"use strict";
class Cloud extends GameObject {
    constructor(game, x, y, scene) {
        super(game, x, y);
        this.delays = [
            'delay-1',
            'delay-1',
            'delay-2',
            'delay-3',
            'delay-4',
            'delay-4',
            'delay-4',
            'delay-1',
            'delay-2',
            'delay-2',
            'delay-2',
            'delay-3',
            'delay-4',
            'delay-4',
            'delay-4',
            'delay-4',
            'delay-1',
            'delay-2',
            'delay-3',
            'delay-4',
        ];
        this.clouds = [
            'big-cloud-1',
            'big-cloud-2',
            'big-cloud-3',
            'small-cloud'
        ];
        let cloudName = this.clouds[Math.floor(Math.random() * this.clouds.length)];
        this.scene = scene;
        if (cloudName == 'small-cloud') {
            this.style.width = "50px";
            this.style.height = "50px";
        }
        this.style.backgroundImage = "url('./img/" + cloudName + ".png')";
        this.classList.add(this.delays[Math.floor(Math.random() * this.clouds.length)]);
    }
    update() {
        this.x += 3;
        this.move();
        if (this.x > window.innerWidth) {
        }
    }
    rain() {
        let position = this.getBoundingClientRect();
        let rainDrop = new Drop(this.game, position.left, position.top);
        this.scene.addDropToWorld(rainDrop);
    }
}
customElements.define('cloud-object', Cloud);
