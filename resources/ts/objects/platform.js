"use strict";
class Platform extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('platform-object', Platform);
