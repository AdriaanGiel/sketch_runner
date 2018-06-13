"use strict";
class Pipe extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('pipe-object', Pipe);
