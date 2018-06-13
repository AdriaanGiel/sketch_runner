"use strict";
class GameObject extends HTMLElement {
    constructor(game, x, y) {
        super();
        this.x = 0;
        this.y = 0;
        this.game = game;
        this.x = x;
        this.y = y;
        document.body.appendChild(this);
        this.move();
    }
    move() {
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
}
