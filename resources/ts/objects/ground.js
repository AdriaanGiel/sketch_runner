"use strict";
class Ground extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('ground-object', Ground);
