"use strict";
class Drop extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
        this.speedX = 0;
        this.speedY = 0;
        console.log("creating a dropp");
        this.speedX = -1;
        this.speedY = 1;
        console.log('speed', this.speedY);
    }
    move() {
        let temp = this.speedY;
        console.log(this.speedY);
        this.y += temp;
        super.move();
    }
}
customElements.define('drop-object', Drop);
