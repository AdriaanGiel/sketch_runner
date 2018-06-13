"use strict";
class Coin extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('coin-object', Coin);
