"use strict";
class Spike extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('spike-object', Spike);
